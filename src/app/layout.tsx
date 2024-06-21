import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Bricolage_Grotesque } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ToastProvider } from "@/components/ui/toast";
import Provider from "@/components/session-provider";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata = {
  title: "vaultwish",
  description: "Bridging the gap between benefactors and beneficiaries",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <ToastProvider>
        <html
          lang="en"
          className={cn(GeistSans.className, bricolageGrotesque.variable)}
        >
          <body>
            <Navbar />
            {children}
            <Footer />
          </body>
        </html>
      </ToastProvider>
    </Provider>
  );
}
