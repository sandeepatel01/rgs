import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ClientWrapper from "@/components/shared/ClientWrapper";
import { Toaster } from "@/components/ui/sonner";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rgsolars.in"),

  title: {
    default: "Rajput Genset & Solar | Solar Solutions in India",
    template: "Rajput Genset & Solar",
  },

  description:
    "Rajput Genset & Solar provides reliable uninterrupted power solution across india  solutions for residential, commercial, and industrial use across India.",

  keywords: [
    "DG Set supplier",
    "solar panel installation",
    "solar energy company India",
    "genset dealer",
    "rooftop solar system",
    "industrial genset",
    "solar power solutions",
    "best solar installer",
    "best solar project",
    "best solar epc",
    "renewable energy",
    "power solution",
    "solar energy",
    "best solar in delhi",
    "solar in delhi ncr",
    "solar panels",
    "solar inverter",
    "reduce electricity bill",
    "reduce bill",
  ],

  authors: [{ name: "Rajput Genset & Solar" }],
  creator: "Rajput Genset & Solar",
  publisher: "Rajput Genset & Solar",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Rajput Genset & Solar – DG Set & Solar Energy Solutions",
    description:
      "Trusted supplier of DG Sets and solar power systems. Affordable, reliable & government approved solutions.",
    url: "https://www.rgsolars.in",
    siteName: "RG Solars",
    images: [
      {
        url: "/assets/rgs.png",
        width: 1200,
        height: 630,
        alt: "Rajput Genset & Solars",
      },
    ],
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rajput Genset & Solar",
    description:
      "DG Set and Solar Power Solutions for Home, Business & Industry.",
    images: ["/assets/rgs.png"],
  },

  icons: {
    icon: "/assets/favicon.ico",
    apple: "/assets/rgs.png",
  },

  alternates: {
    canonical: "https://www.rgsolars.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} antialiased min-h-screen`}>
        <Navbar />
        {children}
        <Toaster />
        <Footer />
        <ClientWrapper />
      </body>
    </html>
  );
}
