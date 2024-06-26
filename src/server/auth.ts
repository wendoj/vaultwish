import { DrizzleAdapter } from "@auth/drizzle-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { type Adapter } from "next-auth/adapters";
import DiscordProvider from "next-auth/providers/discord";
import EmailProvider from "next-auth/providers/email";
import { env } from "@/env";
import { db } from "@/server/db";
import {
  accounts,
  sessions,
  users,
  verificationTokens,
} from "@/server/db/schema/auth";
import { Resend } from "resend";
import VerificationEmail from "../../packages/transactional/emails/verify-email";
import SignInEmail from "../../packages/transactional/emails/sign-in";
import { eq } from "drizzle-orm";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }) as Adapter,
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    EmailProvider({
      from: env.SMTP_FROM,
      sendVerificationRequest: async ({ identifier, url, provider }) => {
        const resend = new Resend(env.RESEND_API_KEY);
        const user = await db
          .select({
            emailVerified: users.emailVerified,
          })
          .from(users)
          .where(eq(users.email, identifier));
        const emailVerified = user[0]?.emailVerified ?? false;

        try {
          if (emailVerified) {
            await resend.emails.send({
              from: provider.from,
              to: identifier,
              subject: "Sign in to VaultWish",
              react: SignInEmail({ link: url }),
              text: `Welcome back to VaultWish, please sign in to continue by clicking the button below. If you did not request this email, you can safely ignore it and your account will not be affected.`,
            });
          } else {
            await resend.emails.send({
              from: provider.from,
              to: identifier,
              subject: "Verify your email address",
              react: VerificationEmail({ link: url }),
              text: `Welcome to VaultWish, please verify your email address to get started by clicking the button below. If you did not sign up for an account, you can safely ignore this email.`,
            });
          }
        } catch (error) {
          console.log({ error });
        }
      },
    }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
