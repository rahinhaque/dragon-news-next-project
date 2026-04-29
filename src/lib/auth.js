


import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";


const getRequiredEnv = (name) => {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `[auth] Missing required environment variable: ${name}. ` +
        `Please add it to .env.local and restart the dev server.`
    );
  }
  return value;
};

const normalizeUrl = (url) => url.replace(/\/+$/, "");
const betterAuthUrl = normalizeUrl(
  process.env.BETTER_AUTH_URL || "http://localhost:3000"
);
const vercelUrl = process.env.VERCEL_URL
  ? normalizeUrl(`https://${process.env.VERCEL_URL}`)
  : null;
const trustedOrigins = [betterAuthUrl, "http://localhost:3000"];
if (vercelUrl) trustedOrigins.push(vercelUrl);
const mongodbUri = getRequiredEnv("MONGODB_URI");
const googleClientId = getRequiredEnv("GOOGLE_CLIENT_ID");
const googleClientSecret = getRequiredEnv("GOOGLE_CLIENT_SECRET");
const githubClientId = process.env.GITHUB_CLIENT_ID;
const githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
const socialProviders = {
  google: {
    clientId: googleClientId,
    clientSecret: googleClientSecret,
    prompt: "select_account",
  },
};

if (githubClientId && githubClientSecret) {
  socialProviders.github = {
    clientId: githubClientId,
    clientSecret: githubClientSecret,
  };
}

const client = new MongoClient(mongodbUri);
const db = client.db("dragon-news");


export const auth = betterAuth({
  baseURL: betterAuthUrl,
  trustedOrigins,
   database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders,
});
