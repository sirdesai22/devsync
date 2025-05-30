import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SaaSify - Scale Your Business Beyond Limits",
  description:
    "Transform your workflow with our cutting-edge SaaS platform. Automate processes, gain insights, and accelerate growth.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="saasify-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
