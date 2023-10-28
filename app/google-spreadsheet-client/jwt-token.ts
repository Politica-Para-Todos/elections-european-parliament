import { JWT } from "google-auth-library";

export const jwt = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY,
  scopes: process.env.GOOGLE_API_SCOPE
});
