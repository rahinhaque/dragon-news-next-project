import { createAuthClient } from "better-auth/react";

// Use same-origin in browser so Vercel deployments call their own domain.
export const authClient = createAuthClient();

export const { signIn, signUp, useSession } = authClient;