import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akshar Production and Technology | Digital Agency - Web Development, Marketing & Design",
  description: "Transform your digital presence with Akshar Production and Technology. We specialize in web development, social media marketing, paid advertising, graphic design, video editing, and custom web applications.",
  keywords: ["web development", "digital marketing", "social media marketing", "paid ads", "graphic design", "video editing", "web apps", "digital agency"],
  authors: [{ name: "Akshar Production and Technology" }],
  openGraph: {
    title: "Akshar Production and Technology | Digital Agency",
    description: "Transform your digital presence with our expert services in web development, marketing, and design.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshar Production and Technology | Digital Agency",
    description: "Transform your digital presence with our expert services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Sora - Display font with geometric character */}
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        {/* DM Sans - Clean body font (Satoshi alternative from Google Fonts) */}
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap" rel="stylesheet" />
        {/* JetBrains Mono - For code/monospace elements */}
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
