import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { MoveRight, Sparkles } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main>
      {/* Gradients */}
      <div
        aria-hidden="true"
        className="absolute -top-96 start-1/2 -z-10 flex -translate-x-1/2 transform"
      >
        <div className="h-[44rem] w-[25rem] -translate-x-[10rem] rotate-[-60deg] transform bg-gradient-to-r from-background/50 to-background blur-3xl" />
        <div className="h-[50rem] w-[90rem] origin-top-left -translate-x-[15rem] -rotate-12 rounded-full bg-gradient-to-tl from-primary via-primary to-transparent opacity-25 blur-3xl" />
      </div>

      <section
        id="hero"
        className="mx-auto mt-24 flex flex max-w-7xl flex-col items-center justify-center rounded-md border border-primary/10 bg-accent/5 px-6 py-40 text-center shadow backdrop-blur lg:px-8"
      >
        <span className="max-w-4xl">
          <Badge variant="accent">
            <Sparkles size={12} className="inline-block" />
            Simply post your wishlists!
          </Badge>
          <h1 className="font-heading mt-2 text-pretty text-5xl font-semibold md:text-6xl">
            Fund your dreams & goals with anonymous donations from strangers.
          </h1>
          <p className="mt-4 text-balance text-lg text-muted-foreground">
            Vaultwish is a platform that allows you to post your wishlists and
            receive anonymous donations from strangers, without revealing your
            identity.
          </p>
        </span>
        <span className="mt-8 flex flex-row space-x-2">
          <Link className={buttonVariants({ size: "lg" })} href="/register">
            Get started <MoveRight size={12} className="ml-2 inline-block" />
          </Link>
          <Button variant="outline" size="lg">
            Learn more
          </Button>
        </span>

        {/* SVG Element */}
        <div className="absolute end-0 top-0 hidden -translate-y-12 translate-x-20 md:block">
          <svg
            className="h-auto w-16 text-secondary"
            width={121}
            height={135}
            viewBox="0 0 121 135"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
              stroke="currentColor"
              strokeWidth={10}
              strokeLinecap="round"
            />
            <path
              d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
              stroke="currentColor"
              strokeWidth={10}
              strokeLinecap="round"
            />
            <path
              d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
              stroke="currentColor"
              strokeWidth={10}
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* SVG Element */}
        <div className="absolute bottom-0 start-0 hidden -translate-x-32 translate-y-10 md:block">
          <svg
            className="h-auto w-40 text-primary"
            width={347}
            height={188}
            viewBox="0 0 347 188"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
              stroke="currentColor"
              strokeWidth={7}
              strokeLinecap="round"
            />
          </svg>
        </div>
      </section>
    </main>
  );
}
