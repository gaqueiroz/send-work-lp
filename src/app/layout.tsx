import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { AppProvider } from "@/shared/components/AppProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ['100', '300', '700'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "SendWork",
  description:
    "Potencialize seu engajamento com segurança e entrega inigualável.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="shortcut icon"href="/images/favicon/favicon.ico" />
      </Head>
      <body className={inter.variable}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
