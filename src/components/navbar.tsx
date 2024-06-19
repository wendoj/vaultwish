import { navLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="flex flex-col w-full fixed top-0 z-50">
      <nav className="flex w-full items-center justify-between bg-white/50 px-6 py-6 backdrop-blur lg:px-8">
        <Link
          href="/"
          className="font-heading flex flex-row items-center gap-x-1 text-lg font-semibold"
        >
          <Image
            src="/favicon-32x32.png"
            alt="VaultWish Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          VaultWish
        </Link>
        <div className="flex flex-row items-center space-x-4">
          <ul className="flex flex-row space-x-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <Button>Sign in</Button>
        </div>
      </nav>
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-transparent via-primary-foreground to-transparent" />
    </header>
  );
}
