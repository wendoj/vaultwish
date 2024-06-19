import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-primary/[1%] to-transparent">
      <div className="mx-auto flex max-w-7xl flex-row items-center justify-between px-6 py-6 lg:px-8">
        <p className="text-xs text-muted-foreground">
          Made with ❤️ by{" "}
          <Link
            href="https://github.com/wendoj"
            target="_blank"
            passHref
            className="text-foreground transition hover:text-primary"
          >
            wendoj
          </Link>
        </p>
        <Link
          href="https://github.com/wendoj"
          target="_blank"
          passHref
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          <Button variant={"outline"}>
            <Github className="h-4 w-4" />
          </Button>
        </Link>
      </div>
      <div className="h-1 bg-[radial-gradient(closest-side,#EBC3DB,#ff495c,#EBC3DB,transparent)] opacity-50" />
    </footer>
  );
}
