import Link from "next/link";
import { UserAuthForm } from "@/components/ui/auth/user-auth-form";

export default function SignInPage() {
  return (
    <main className="container flex h-full min-h-screen flex-col items-center justify-center">
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="font-heading text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to sign in your account
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              href="/sign-up"
              className="underline underline-offset-4 hover:text-primary"
            >
              Sign up
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
