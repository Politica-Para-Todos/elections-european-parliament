import { JWT } from "google-auth-library";

console.log('SERVICE-ACCOUNT-EMAIL: ', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL![0]);
console.log('PRIVATE-KEY: ', process.env.GOOGLE_PRIVATE_KEY![1]);

export const jwt = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY,
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets.readonly",
    "https://www.googleapis.com/auth/drive.file",
    "https://www.googleapis.com/auth/drive.readonly",
  ]
});
