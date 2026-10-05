import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getHoneypotValue } from "@/lib/book-demo";
import {
  EARLY_ACCESS_INVALID_EMAIL,
  normalizeEarlyAccessEmail,
} from "@/lib/early-access";

const UNAVAILABLE = "Early access sign-up is temporarily unavailable. Please try again later.";
const FAILED = "We couldn’t add you just now. Please try again.";

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

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  if (getHoneypotValue(body)) {
    console.warn("[early-access] Honeypot triggered; skipping notification.");
    return NextResponse.json({ ok: true });
  }

  const email = normalizeEarlyAccessEmail(
    body && typeof body === "object" ? (body as Record<string, unknown>).email : undefined,
  );
  if (!email) {
    return NextResponse.json({ ok: false, error: EARLY_ACCESS_INVALID_EMAIL }, { status: 400 });
  }

  const apiKey = getEnv("RESEND_API_KEY");
  const toEmail = getEnv("BOOK_DEMO_TO_EMAIL");
  const fromEmail = getEnv("BOOK_DEMO_FROM_EMAIL");

  if (
    !apiKey ||
    !toEmail ||
    !fromEmail ||
    !apiKey.startsWith("re_") ||
    isPlaceholderEnv(toEmail) ||
    isPlaceholderEnv(fromEmail)
  ) {
    console.error("[early-access] Email configuration missing or incomplete.");
    return NextResponse.json({ ok: false, error: UNAVAILABLE }, { status: 503 });
  }

  try {
    const result = await new Resend(apiKey).emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `[Nara] Early access request — ${email}`,
      text: ["Nara early access request", "", `Email: ${email}`, "Source: /nara"].join("\n"),
    });

    if (result.error) {
      console.error("[early-access] Notification email failed:", result.error.name);
      return NextResponse.json({ ok: false, error: FAILED }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[early-access] Unexpected email error:", error instanceof Error ? error.name : "unknown");
    return NextResponse.json({ ok: false, error: FAILED }, { status: 500 });
  }
}
