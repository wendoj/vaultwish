"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { navLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import styles from "@/styles/components/navbar.module.css";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import LoadingSpinner from "@/components/ui/loading-spinner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";

type IconProps = {
  ["data-hide"]: boolean;
};

type NavProps = {
  text: string;
  href: string;
  i: number;
  className?: string;
};

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.12,
    },
  }),
  hidden: { opacity: 0 },
};

function NavItem(props: NavProps) {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  return (
    <motion.li
      className={props.className}
      variants={variants}
      custom={props.i}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Link
        href={props.href}
        className={cn(
          isActive ? "text-primary" : "text-muted-foreground",
          styles["nav-link"],
        )}
      >
        {props.text}
      </Link>
    </motion.li>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const loading = session === undefined;

  return (
    <header className="z-50 mx-auto max-w-7xl">
      <nav className={styles.nav}>
        <div className="flex w-full flex-col">
          <div className="flex flex-row items-center">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  styles.burger,
                  "inline-flex transform items-center justify-center rounded-md p-2 transition-all duration-300 focus:outline-none",
                )}
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <MenuIcon data-hide={isOpen} />
                <CrossIcon data-hide={!isOpen} />
              </button>
            </div>
            <Link
              href="/"
              className="flex cursor-pointer flex-row items-center gap-1"
            >
              <Image
                src="/favicon-32x32.png"
                alt="VaultWish Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-heading text-lg font-semibold">
                VaultWish
              </span>
            </Link>
            <hr className="ml-10 mr-3 flex hidden h-3 w-[1px] bg-slate-900/60 sm:block" />
            <ul className={styles["desktop-nav"]}>
              {navLinks.map((link, i) => (
                <NavItem
                  key={link.href}
                  href={link.href}
                  text={link.label}
                  i={i}
                  className="text-base"
                />
              ))}
            </ul>

            <div className="hidden w-full grow items-center justify-end gap-1.5 sm:flex">
              {loading ? (
                <LoadingSpinner />
              ) : session?.user ? (
                <div className="flex flex-row items-center space-x-1">
                  <div className="flex flex-row items-center space-x-2 rounded-md border pr-3">
                    <Avatar className="rounded-none">
                      <AvatarImage
                        src={session?.user.image ?? "/assets/user.webp"}
                      />
                      <AvatarFallback className="rounded-l-md rounded-r-none">
                        {session?.user.email[0]!.toUpperCase() ?? "VW"}
                      </AvatarFallback>
                    </Avatar>
                    <Link href="/dashboard" className="text-sm">
                      {session.user.email?.split("@")[0]}
                    </Link>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      signOut({
                        redirect: true,
                        callbackUrl: `${window.location.origin}/sign-in`,
                      })
                    }
                  >
                    <LogOut size={16} />
                  </Button>
                </div>
              ) : (
                <Button className="w-auto px-6" onClick={() => signIn()}>
                  Sign in
                </Button>
              )}
            </div>
          </div>
          <hr className="m-0 mt-6 h-px w-full border-none bg-gradient-to-r from-slate-200/0 via-slate-200/30 to-slate-200/0" />
        </div>

        {/* Mobile menu */}
        <AnimatePresence key="menu">
          {isOpen && (
            <motion.div
              className="fixed right-0 top-0 z-40 flex h-screen w-full flex-col justify-start overflow-y-hidden bg-background"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 1, type: "spring", bounce: 0.25 }}
            >
              {/* Expandable menu */}
              <div className="flex h-20 max-h-20 min-h-[60px] w-full items-center justify-between border-b pl-[22px] pr-1">
                <span className="text-base font-medium">Menu</span>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={styles.burger}
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <CrossIcon data-hide={!isOpen} />
                </button>
              </div>
              <div className="flex h-full flex-col items-start justify-between overflow-y-auto">
                {/* Links */}
                <ul className="flex min-h-fit w-full flex-col items-start space-y-6 px-[22px] py-[58px]">
                  {navLinks.map((link, i) => (
                    <button key={link.href} onClick={() => setIsOpen(false)}>
                      <NavItem
                        href={link.href}
                        text={link.label}
                        i={i}
                        className="text-xl"
                      />
                    </button>
                  ))}
                </ul>

                {/* Footer */}
                <div className="flex min-h-fit w-full flex-col space-y-8 px-[22px] py-10">
                  <span className="text-sm text-muted-foreground">
                    Made with ❤️ by{" "}
                    <Link
                      href="https://github.com/wendoj"
                      target="_blank"
                      passHref
                      className="text-foreground transition hover:text-primary"
                    >
                      wendoj
                    </Link>
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <style jsx global>{`
          html,
          body {
            overflow-y: ${isOpen ? "hidden" : "initial"};
            scrollbar-width: ${isOpen ? "none" : "unset"};
            -ms-overflow-style: ${isOpen ? "none" : "unset"};
            touch-action: ${isOpen ? "none" : "unset"};
            -ms-touch-action: ${isOpen ? "none" : "unset"};
          }
        `}</style>
      </nav>
    </header>
  );
}

function MenuIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute h-5 w-5"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 2.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props: IconProps) {
  return (
    <svg
      className="absolute h-5 w-5"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
