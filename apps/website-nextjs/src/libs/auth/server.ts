import type {} from "@template/sdk/auth";

import { cookies } from "next/headers";

import { createAuthServerClient } from "@template/sdk/auth";

import { env } from "~/env";

export function createClient() {
  const cookieStore = cookies();

  return createAuthServerClient({
    url: env.NEXT_PUBLIC_SERVER_URL,
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options),
          );
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  });
}
