import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  metadataBase: new URL("https://axiouslabs.com"),
  title: {
    default: "axiouslabs",
    template: "%s — axiouslabs",
  },
  description:
    "axiouslabs partners with ambitious teams to build software platforms, cloud systems, and AI products that scale.",
  openGraph: {
    siteName: "axiouslabs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
