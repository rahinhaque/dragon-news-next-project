


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

const betterAuthUrl = process.env.BETTER_AUTH_URL || "http://localhost:3000";
const mongodbUri = getRequiredEnv("MONGODB_URI");
const googleClientId = getRequiredEnv("GOOGLE_CLIENT_ID");
const googleClientSecret = getRequiredEnv("GOOGLE_CLIENT_SECRET");

const client = new MongoClient(mongodbUri);
const db = client.db("dragon-news");


export const auth = betterAuth({
  baseURL: betterAuthUrl,
  trustedOrigins: [betterAuthUrl],
   database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
  emailAndPassword: {
    enabled: true,
  },
   socialProviders: {
        google: { 
            clientId: googleClientId , 
            clientSecret: googleClientSecret , 
            prompt: "select_account",
        }, 
         github: { 
            clientId: process.env.GITHUB_CLIENT_ID , 
            clientSecret: process.env.GITHUB_CLIENT_SECRET , 
        }, 
    },
});
