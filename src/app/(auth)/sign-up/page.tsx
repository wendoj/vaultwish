import Link from "next/link";
import { cn } from "@/lib/utils";
import { UserAuthForm } from "@/components/ui/auth/user-auth-form";

export default function SignUpPage() {
  return (
    <main className="container flex h-full min-h-screen flex-col items-center justify-center">
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="font-heading text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="underline underline-offset-4 hover:text-primary"
            >
              Sign in
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
