import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AI Prompts Platform | 1000+ Expert-Crafted Prompts That Work",
    template: "%s | AI Prompts Platform",
  },
  description:
    "Get instant access to 1000+ expert-tested prompts for ChatGPT, Claude, Midjourney, and more. Copy, paste, get results. One-time payment, lifetime access.",
  keywords: [
    "AI prompts",
    "ChatGPT prompts",
    "Claude prompts",
    "Midjourney prompts",
    "AI art prompts",
    "prompt engineering",
    "AI writing prompts",
    "image generation prompts",
  ],
  authors: [{ name: "AlwaysEncrypted" }],
  creator: "AlwaysEncrypted",
  publisher: "AlwaysEncrypted",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://prompts.alwaysencrypted.com"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "AI Prompts Platform",
    title: "AI Prompts Platform | 1000+ Expert-Crafted Prompts That Work",
    description:
      "Get instant access to 1000+ expert-tested prompts for ChatGPT, Claude, Midjourney, and more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Prompts Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Prompts Platform | 1000+ Expert-Crafted Prompts That Work",
    description:
      "Get instant access to 1000+ expert-tested prompts for ChatGPT, Claude, Midjourney, and more.",
    images: ["/og-image.png"],
    creator: "@alwaysencrypted",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#6366f1" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
