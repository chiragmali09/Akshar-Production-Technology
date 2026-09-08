import type { Metadata } from "next";
import { Sora, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aksharproduction.com"),
  title: {
    default: "Akshar Production & Technology | Digital Agency - Web Development, Marketing & Design",
    template: "%s | Akshar Production & Technology",
  },
  description:
    "Transform your digital presence with Akshar Production & Technology. We deliver cutting-edge web development, high-ROI social media marketing, paid ads, graphic design, and custom web applications.",
  keywords: [
    "web development",
    "digital marketing",
    "social media marketing",
    "paid advertising",
    "graphic design",
    "video editing",
    "web applications",
    "digital agency Rajasthan",
    "Akshar Production",
    "full stack web development",
  ],
  authors: [{ name: "Chirag Mali", url: "https://aksharproduction.com" }],
  creator: "Akshar Production and Technology",
  publisher: "Akshar Production and Technology",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/icon.png",
  },
  openGraph: {
    title: "Akshar Production & Technology | Digital Agency",
    description:
      "Transform your brand with custom web development, strategic marketing, and cutting-edge design. Explore our digital services.",
    url: "https://aksharproduction.com",
    siteName: "Akshar Production & Technology",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshar Production & Technology | Digital Agency",
    description:
      "Transform your brand with custom web development, strategic marketing, and cutting-edge design.",
    creator: "@aksharproduction",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Akshar Production & Technology",
    url: "https://aksharproduction.com",
    logo: "https://aksharproduction.com/logo.png",
    image: "https://aksharproduction.com/logo.png",
    description:
      "Full-service digital agency specializing in custom web development, social media marketing, paid advertising, graphic design, and video production.",
    telephone: "+91 98765 43210",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    founder: {
      "@type": "Person",
      name: "Chirag Mali",
      jobTitle: "Founder & Creative Technologist",
    },
    sameAs: [
      "https://www.instagram.com/aksharproduction/",
      "https://www.facebook.com/profile.php?id=61572490632035",
    ],
  };

  return (
    <html
      lang="en"
      className={`${sora.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
