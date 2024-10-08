import { Resend } from "resend";

const apiKey = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export function getApiKey() {
  return apiKey;
}
