import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://paulolievoreleoni.com"),
  title: {
    default: "Paulo Lievore Leoni | Data Specialist | BI & Analytics Engineer",
    template: "%s | Paulo Lievore Leoni",
  },
  description:
    "Enterprise BI specialist focused on scalable semantic models, analytics governance, CI/CD automation, and high-impact data platforms.",
  keywords: [
    "BI",
    "Analytics Engineer",
    "Data Specialist",
    "Power BI",
    "Tableau",
    "Qlik",
    "Semantic Modeling",
    "Data Warehouse",
    "CI/CD",
    "Azure DevOps",
    "remote",
    "enterprise BI",
    "Paulo Lievore Leoni",
  ],
  authors: [{ name: "Paulo Lievore Leoni" }],
  creator: "Paulo Lievore Leoni",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://paulolievoreleoni.com",
    title: "Paulo Lievore Leoni | Data Specialist | BI & Analytics Engineer",
    description:
      "Enterprise BI specialist focused on scalable semantic models, analytics governance, CI/CD automation, and high-impact data platforms.",
    siteName: "Paulo Lievore Leoni Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Paulo Lievore Leoni",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paulo Lievore Leoni | Data Specialist | BI & Analytics Engineer",
    description:
      "Enterprise BI specialist focused on scalable semantic models, analytics governance, CI/CD automation, and high-impact data platforms.",
    images: ["/profile.jpg"],
  },
  icons: {
    icon: "/profile.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster position="top-center" richColors />
        <SmoothScroll />
      </body>
    </html>
  );
}
