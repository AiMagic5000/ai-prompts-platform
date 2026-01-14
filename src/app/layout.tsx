import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { ConditionalClerkProvider } from "@/components/providers/clerk-provider"
import { ThemeProvider } from "@/components/providers/theme-provider"
import "./globals.css"

export const dynamic = 'force-dynamic'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "PromptVault | 500+ Expert AI Prompts - ChatGPT, Claude, Midjourney | $39",
    template: "%s | PromptVault",
  },
  description:
    "Get 500+ expert-crafted AI prompts for ChatGPT, Claude, Gemini, Midjourney, Sora & more. 60% OFF - Only $39. Instant access, lifetime updates, 30-day guarantee.",
  keywords: [
    "AI prompts",
    "ChatGPT prompts",
    "Claude prompts",
    "Midjourney prompts",
    "DALL-E prompts",
    "Sora prompts",
    "prompt engineering",
    "AI automation",
    "n8n workflows",
    "AI art prompts",
    "video generation prompts",
  ],
  authors: [{ name: "PromptVault by AlwaysEncrypted" }],
  creator: "AlwaysEncrypted",
  publisher: "AlwaysEncrypted",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://prompts.alwaysencrypted.com"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "PromptVault",
    title: "PromptVault | 500+ Expert AI Prompts - 60% OFF",
    description:
      "Get 500+ expert-crafted AI prompts for ChatGPT, Claude, Midjourney, Sora & more. Only $39. Instant access.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PromptVault - AI Prompts Library",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PromptVault | 500+ Expert AI Prompts - 60% OFF",
    description:
      "Get 500+ expert-crafted AI prompts for ChatGPT, Claude, Midjourney, Sora & more. Only $39.",
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0F0F23" />
        <meta name="ai-content-declaration" content="AI-powered prompts library" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground min-h-screen`}
      >
        <ThemeProvider>
          <ConditionalClerkProvider>
            {children}
          </ConditionalClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
