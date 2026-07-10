import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  getHoneypotValue,
  getInterestLabel,
  parseBookDemoPayload,
  type BookDemoPayload,
} from "@/lib/book-demo";

function getEnv(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value || undefined;
}

function isPlaceholderEnv(value: string): boolean {
  return (
    value.includes("replace_with") ||
    value.includes("your_") ||
    value.includes("example.com")
  );
}

function maskEmail(value: string): string {
  const atIndex = value.indexOf("@");
  if (atIndex <= 0) {
    return "(invalid-email)";
  }

  return `${value[0]}***${value.slice(atIndex)}`;
}

function logEnvConfig() {
  const apiKey = getEnv("RESEND_API_KEY");
  const toEmail = getEnv("BOOK_DEMO_TO_EMAIL");
  const fromEmail = getEnv("BOOK_DEMO_FROM_EMAIL");

  console.info("[book-demo] Env config:", {
    hasApiKey: Boolean(apiKey),
    apiKeyLooksValid: Boolean(apiKey?.startsWith("re_")),
    hasToEmail: Boolean(toEmail),
    toEmailIsPlaceholder: toEmail ? isPlaceholderEnv(toEmail) : true,
    toEmailMasked: toEmail ? maskEmail(toEmail) : null,
    hasFromEmail: Boolean(fromEmail),
    fromEmailIsPlaceholder: fromEmail ? isPlaceholderEnv(fromEmail) : true,
    fromEmailMasked: fromEmail ? maskEmail(fromEmail.replace(/^.*<([^>]+)>.*$/, "$1")) : null,
  });
}

function buildNotificationEmail(payload: BookDemoPayload) {
  const requestType = payload.isPartner ? "Design partner request" : "Demo request";
  const interestLabel = getInterestLabel(payload.interest);

  return {
    subject: `[Nara Labs] ${requestType} — ${payload.name} @ ${payload.company}`,
    text: [
      requestType,
      "",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Company: ${payload.company}`,
      `Interest: ${interestLabel}`,
      "",
      "Message:",
      payload.message,
    ].join("\n"),
    html: `
      <h2>${requestType}</h2>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(payload.company)}</p>
      <p><strong>Interest:</strong> ${escapeHtml(interestLabel)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(payload.message).replace(/\n/g, "<br />")}</p>
    `,
  };
}

function buildConfirmationEmail(payload: BookDemoPayload) {
  const requestType = payload.isPartner ? "design partner request" : "demo request";

  return {
    subject: "We received your Nara Labs request",
    text: [
      `Hi ${payload.name},`,
      "",
      `Thanks for reaching out to Nara Labs. We received your ${requestType} and will follow up within two business days.`,
      "",
      "— Nara Labs",
    ].join("\n"),
    html: `
      <p>Hi ${escapeHtml(payload.name)},</p>
      <p>Thanks for reaching out to Nara Labs. We received your ${escapeHtml(requestType)} and will follow up within two business days.</p>
      <p>— Nara Labs</p>
    `,
  };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function resendFailureResponse(label: string, error: unknown) {
  console.error(`[book-demo] ${label} failed:`, error);
  return NextResponse.json(
    { ok: false, error: "Unable to send your request right now. Please try again." },
    { status: 500 },
  );
}

export async function POST(request: Request) {
  logEnvConfig();

  let body: unknown;

  try {
    body = await request.json();
  } catch (error) {
    console.error("[book-demo] Failed to parse JSON body:", error);
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const honeypotValue = getHoneypotValue(body);
  if (honeypotValue) {
    console.warn("[book-demo] Honeypot triggered; skipping email send.", {
      honeypotLength: honeypotValue.length,
    });
    return NextResponse.json({ ok: true });
  }

  const parsed = parseBookDemoPayload(body);

  if (!parsed.ok) {
    return NextResponse.json(
      {
        ok: false,
        error: parsed.error,
        fieldErrors: parsed.fieldErrors,
      },
      { status: 400 },
    );
  }

  const apiKey = getEnv("RESEND_API_KEY");
  const toEmail = getEnv("BOOK_DEMO_TO_EMAIL");
  const fromEmail = getEnv("BOOK_DEMO_FROM_EMAIL");

  if (!apiKey || !toEmail || !fromEmail) {
    console.error("[book-demo] Missing email configuration.", {
      hasApiKey: Boolean(apiKey),
      hasToEmail: Boolean(toEmail),
      hasFromEmail: Boolean(fromEmail),
    });

    return NextResponse.json(
      {
        ok: false,
        error: "Demo requests are temporarily unavailable. Please email us directly.",
      },
      { status: 503 },
    );
  }

  if (
    isPlaceholderEnv(toEmail) ||
    isPlaceholderEnv(fromEmail) ||
    !apiKey.startsWith("re_")
  ) {
    console.error("[book-demo] Email configuration still uses placeholder values.", {
      toEmailIsPlaceholder: isPlaceholderEnv(toEmail),
      fromEmailIsPlaceholder: isPlaceholderEnv(fromEmail),
      apiKeyLooksValid: apiKey.startsWith("re_"),
    });

    return NextResponse.json(
      {
        ok: false,
        error: "Demo requests are temporarily unavailable. Please email us directly.",
      },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const payload = parsed.data;
  const notification = buildNotificationEmail(payload);
  const confirmation = buildConfirmationEmail(payload);

  console.info("[book-demo] Email send sequence starting.", {
    notificationRecipient: toEmail,
    notificationRecipientMasked: maskEmail(toEmail),
    confirmationRecipient: payload.email,
    confirmationRecipientMasked: maskEmail(payload.email),
    from: fromEmail.replace(/^.*<([^>]+)>.*$/, "$1"),
  });

  try {
    console.info("[book-demo] Step 1/2: Sending internal notification email...");
    const notificationResult = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: payload.email,
      subject: notification.subject,
      text: notification.text,
      html: notification.html,
    });

    if (notificationResult.error) {
      console.error("[book-demo] Notification email send success: false");
      return resendFailureResponse("Notification email", notificationResult.error);
    }

    console.info("[book-demo] Notification email send success: true", {
      recipient: toEmail,
      recipientMasked: maskEmail(toEmail),
      id: notificationResult.data?.id ?? null,
    });

    console.info("[book-demo] Step 2/2: Sending customer confirmation email...");
    const confirmationResult = await resend.emails.send({
      from: fromEmail,
      to: [payload.email],
      subject: confirmation.subject,
      text: confirmation.text,
      html: confirmation.html,
    });

    if (confirmationResult.error) {
      console.error("[book-demo] Confirmation email send success: false");
      return resendFailureResponse("Confirmation email", confirmationResult.error);
    }

    console.info("[book-demo] Confirmation email send success: true", {
      recipient: payload.email,
      recipientMasked: maskEmail(payload.email),
      id: confirmationResult.data?.id ?? null,
    });

    console.info("[book-demo] Both emails sent successfully. Returning 200.");
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[book-demo] Unexpected email error:", error);
    return NextResponse.json(
      { ok: false, error: "Unable to send your request right now. Please try again." },
      { status: 500 },
    );
  }
}
