import { Resend } from "resend";

// const connectResend = async () => {
//   new Resend(process.env.RESEND_API_KEY);
// };

// export default connectResend;

const apiKey = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export function getApiKey() {
  return apiKey;
}
