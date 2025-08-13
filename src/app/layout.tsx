import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | PS",
  description: "Hello, I'm Preston Schlagheck, a finance and computer science student at the University of South Carolina. Explore my portfolio to learn more.",
  keywords: ["Preston Schlagheck", "portfolio", "finance", "computer science", "student", "USC", "fintech", "web development"],
  authors: [{ name: "Preston Schlagheck" }],
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: "Portfolio | Preston Schlagheck",
    description: "Hello, I'm Preston Schlagheck, a finance and computer science student at the University of South Carolina. Explore my portfolio to learn more.",
    type: "website",
    siteName: "Portfolio | Preston Schlagheck",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
