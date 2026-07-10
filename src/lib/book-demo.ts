export const BOOK_DEMO_INTERESTS = [
  "readylead",
  "probeiq",
  "design-partner",
  "research",
  "general",
] as const;

export type BookDemoInterest = (typeof BOOK_DEMO_INTERESTS)[number];

export type BookDemoPayload = {
  name: string;
  email: string;
  company: string;
  interest: BookDemoInterest;
  message: string;
  isPartner: boolean;
};

export type BookDemoFieldErrors = Partial<
  Record<keyof BookDemoPayload, string>
>;

const INTEREST_LABELS: Record<BookDemoInterest, string> = {
  readylead: "ReadyLead (Flagship)",
  probeiq: "ProbeIQ",
  "design-partner": "Design partner program",
  research: "Lab research (Ahead, Local PM OS)",
  general: "General inquiry",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function stripControlCharacters(value: string): string {
  return value.replace(/[\u0000-\u0008\u000B-\u000C\u000E-\u001F\u007F]/g, "");
}

export function sanitizeText(value: unknown, maxLength: number): string {
  if (typeof value !== "string") {
    return "";
  }

  return stripControlCharacters(value).trim().slice(0, maxLength);
}

export function getInterestLabel(interest: BookDemoInterest): string {
  return INTEREST_LABELS[interest];
}

export function getHoneypotValue(body: unknown): string {
  if (!body || typeof body !== "object") {
    return "";
  }

  const input = body as Record<string, unknown>;
  return sanitizeText(input._hp, 200);
}

export function parseBookDemoPayload(body: unknown):
  | { ok: true; data: BookDemoPayload }
  | { ok: false; error: string; fieldErrors?: BookDemoFieldErrors } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const input = body as Record<string, unknown>;

  const name = sanitizeText(input.name, 120);
  const email = sanitizeText(input.email, 254).toLowerCase();
  const company = sanitizeText(input.company, 160);
  const message = sanitizeText(input.message, 4000);
  const interest = sanitizeText(input.interest, 40) as BookDemoInterest;
  const isPartner = input.isPartner === true;
  const fieldErrors: BookDemoFieldErrors = {};

  if (!name) {
    fieldErrors.name = "Name is required.";
  }

  if (!email) {
    fieldErrors.email = "Work email is required.";
  } else if (!EMAIL_PATTERN.test(email)) {
    fieldErrors.email = "Enter a valid email address.";
  }

  if (!company) {
    fieldErrors.company = "Company is required.";
  }

  if (!interest || !BOOK_DEMO_INTERESTS.includes(interest)) {
    fieldErrors.interest = "Select a product interest.";
  }

  if (!message) {
    fieldErrors.message = "Message is required.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      error: "Please fix the highlighted fields.",
      fieldErrors,
    };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      company,
      interest,
      message,
      isPartner,
    },
  };
}

