import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Evergreen Arts Centre | Arts that transform Lephalale",
    template: "%s | Evergreen Arts Centre",
  },
  description:
    "Evergreen Arts Centre develops local talent, tells local stories, and uses creativity to build a stronger Lephalale.",
  metadataBase: new URL("https://evergreenarts.co.za"),
  openGraph: {
    title: "Evergreen Arts Centre",
    description: "Arts that transform Lephalale.",
    type: "website",
    images: ["/images/generated/hero-arts-transformation.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
