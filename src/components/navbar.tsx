import { navLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-border bg-white px-6 py-6 lg:px-8">
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
  );
}
