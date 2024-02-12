import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { Provider } from "next-auth/providers/index";
import type { NextAuthOptions } from "next-auth";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId:
        "416560613117-1v0hkbohfkpickuj3hbrs6jtqualhgcr.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ] as Provider[],
  secret: "EEoFjZhJA7R7oeskeCFGvg==",
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  // jwt : {
  //   encryption : true
  // }
};
