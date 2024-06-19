import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { MoveRight, Sparkles } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { steps, features } from "@/constants";
import { cn } from "@/lib/utils";

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
        className="mx-auto mt-48 flex flex max-w-7xl flex-col items-center justify-center rounded-md border border-primary/10 bg-accent/5 px-6 py-40 text-center shadow backdrop-blur lg:px-8"
      >
        <span className="mx-auto max-w-3xl">
          <Badge variant="accent">
            <Sparkles size={12} className="inline-block" />
            Simply post your wishlists!
          </Badge>
          <h1 className="font-heading mt-2 text-balance text-4xl font-semibold md:text-5xl">
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

      <section id="steps">
        <div className="mx-auto mt-24 max-w-7xl px-6 py-24 lg:px-8">
          <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            How does it work?
          </h2>
          <div className="relative mt-8 flex flex-wrap">
            <div className="absolute left-0 right-0 top-4 hidden h-[1px] lg:block">
              <div className="h-[1px] w-full bg-black">‌</div>
            </div>
            <div className="z-10 mb-4 grid w-full lg:grid-cols-4 lg:gap-8">
              {steps.map((step, index) => (
                <article className="w-full" key={index}>
                  <span className="block flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="mt-8 text-lg font-medium leading-6 text-black lg:mt-10">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="problem"
        className="mt-24 w-full bg-gradient-to-br from-accent to-accent/50"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-36 text-center lg:px-8">
          <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            The problem.
          </h2>
          <p className="max-w-3xl mt-4 text-balance text-lg text-muted-foreground">
            Most times we receive gifts we don't need or want, and we end up
            throwing them away or giving them to someone else. This is a waste
            of resources and time.
          </p>
          <div className="mt-16 flex flex-col items-center justify-center gap-6 md:flex-row md:items-start">
            <div className="flex w-full flex-col items-center justify-center gap-2 md:w-48">
              <span className="text-4xl">🫣</span>
              <p className="font-semibold font-heading">
                Receives a gift they don't want
              </p>
            </div>
            <Arrow />
            <div className="flex w-full flex-col items-center justify-center gap-2 md:w-48">
              <span className="text-4xl">🫤</span>
              <p className="font-semibold font-heading">
                Doesn't find a reason to keep it <u>forever</u>
              </p>
            </div>
            <Arrow />
            <div className="flex w-full flex-col items-center justify-center gap-2 md:w-48">
              <span className="text-4xl">😬</span>
              <p className="font-semibold font-heading">
                Throws it away or gives it to someone else
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="mx-auto mt-24 flex max-w-7xl flex-col items-start space-y-8 px-6 py-24 py-24 lg:px-8"
      >
        <span className="flex flex-col">
          <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            What we offer.
          </h2>
          <p className="mt-4 text-balance text-lg text-muted-foreground">
            We offer a variety of features to help you get the most out of your
            experience.
          </p>
        </span>
        <div className="grid w-full grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-start rounded-md border-2 border-accent p-14 transition hover:bg-accent"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <feature.icon className="h-10 w-10 p-2.5 text-primary-foreground" />
              </div>
              <span className="mt-6 text-lg font-medium tracking-tight text-foreground">
                {feature.title}
              </span>
              <span className="mt-1 tracking-tighter text-muted-foreground">
                {feature.description}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function Arrow({ className }: { className?: string }) {
  return (
    <svg
      className={cn(
        "w-12 shrink-0 fill-muted-foreground opacity-70 md:-scale-x-100 md:-rotate-90",
        className,
      )}
      viewBox="0 0 138 138"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M72.9644 5.31431C98.8774 43.8211 83.3812 88.048 54.9567 120.735C54.4696 121.298 54.5274 122.151 55.0896 122.639C55.6518 123.126 56.5051 123.068 56.9922 122.506C86.2147 88.9044 101.84 43.3918 75.2003 3.80657C74.7866 3.18904 73.9486 3.02602 73.3287 3.44222C72.7113 3.85613 72.5484 4.69426 72.9644 5.31431Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M56.5084 121.007C56.9835 118.685 57.6119 115.777 57.6736 115.445C59.3456 106.446 59.5323 97.67 58.4433 88.5628C58.3558 87.8236 57.6824 87.2948 56.9433 87.3824C56.2042 87.4699 55.6756 88.1435 55.7631 88.8828C56.8219 97.7138 56.6432 106.225 55.0203 114.954C54.926 115.463 53.5093 121.999 53.3221 123.342C53.2427 123.893 53.3688 124.229 53.4061 124.305C53.5887 124.719 53.8782 124.911 54.1287 125.015C54.4123 125.13 54.9267 125.205 55.5376 124.926C56.1758 124.631 57.3434 123.699 57.6571 123.487C62.3995 120.309 67.4155 116.348 72.791 113.634C77.9171 111.045 83.3769 109.588 89.255 111.269C89.9704 111.475 90.7181 111.057 90.9235 110.342C91.1288 109.626 90.7117 108.878 89.9963 108.673C83.424 106.794 77.3049 108.33 71.5763 111.223C66.2328 113.922 61.2322 117.814 56.5084 121.007Z"
        />
      </g>
    </svg>
  );
}
