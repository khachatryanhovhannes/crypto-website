import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/global";

export const metadata: Metadata = {
  title: "CryptoTracker - Real-Time Cryptocurrency Tracking",
  description:
    "Track top cryptocurrencies in real-time with up-to-date prices, market trends, and 24-hour price changes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="Track top cryptocurrencies in real-time with up-to-date prices, market trends, and 24-hour price changes."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="CryptoTracker - Real-Time Cryptocurrency Tracking"
        />
        <meta
          property="og:description"
          content="Track top cryptocurrencies in real-time with up-to-date prices, market trends, and 24-hour price changes."
        />
        <meta
          property="og:image"
          content="/images/71a53a2f2c8bc26fa1d582c17a80d021.jpg"
        />
        <meta
          property="og:url"
          content="https://coin-cryptotracker.netlify.app/"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
