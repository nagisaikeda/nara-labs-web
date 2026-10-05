import { EMAIL_PATTERN, sanitizeText } from "@/lib/book-demo";

export const EARLY_ACCESS_INVALID_EMAIL = "Please enter a valid email address.";

/** Shared by the modal and the API route so both apply the same rules. */
export function normalizeEarlyAccessEmail(value: unknown): string | null {
  const email = sanitizeText(value, 254).toLowerCase();
  return email && EMAIL_PATTERN.test(email) ? email : null;
}
