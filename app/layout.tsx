import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { SideNav } from "@/components/shared/SideNav";
import { LeftSidebar } from "@/components/shared/LeftSidebar";
import { MainContentBackground } from "@/components/shared/MainContentBackground";
import { MobileHeader } from "@/components/shared/MobileHeader";
import { JsonLd } from "@/components/JsonLd";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL("https://protfilo-ruddy.vercel.app"),
  title: {
    default: "Abdalrahman Hosny | Frontend Developer | React.js & Angular Specialist",
    template: "%s | Abdalrahman Hosny - Frontend Developer",
  },
  description:
    "Passionate Frontend Developer specializing in React.js and Angular. Building elegant, efficient, and user-friendly web applications using modern technologies like React, TypeScript, and Angular.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Angular Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "React.js",
    "Angular",
    "TypeScript",
    "Tailwind CSS",
    "Bootstrap",
    "Web Development",
    "UI/UX Design",
    "Responsive Design",
    "Web Performance",
    "SEO Optimization",
    "Abdalrahman Hosny",
    "Portfolio",
    "Frontend Engineer",
    "Web Developer Egypt",
    "Freelance Developer",
    "Modern Web Apps",
    "Progressive Web Apps",
  ],
  authors: [{ name: "Abdalrahman Hosny", url: "https://protfilo-ruddy.vercel.app" }],
  creator: "Abdalrahman Hosny",
  publisher: "Abdalrahman Hosny",
  alternates: {
    canonical: "https://protfilo-ruddy.vercel.app",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
  openGraph: {
    title: "Abdalrahman Hosny | Frontend Developer | React.js & Angular Specialist",
    description:
      "Passionate Frontend Developer specializing in React.js and Angular. Building elegant, efficient, and user-friendly web applications.",
    url: "https://protfilo-ruddy.vercel.app",
    siteName: "Abdalrahman Hosny - Frontend Developer Portfolio",
    images: [
      {
        url: "/landing.png",
        width: 800,
        height: 800,
        alt: "Abdalrahman Hosny - Frontend Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdalrahman Hosny | Frontend Developer",
    description:
      "Passionate Frontend Developer specializing in React.js and Angular. Building elegant, efficient, and user-friendly web applications.",
    images: ["/landing.png"],
    creator: "@abdalrahmanhosny",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${jakarta.variable} ${outfit.variable} font-sans bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary`}
      >
        <div className="fixed inset-0 -z-10 bg-background"></div>
        {/* Global Background Effects (Subtle) */}
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background opacity-50 pointer-events-none"></div>

        <div className="flex min-h-screen">
          {/* Left Sidebar - Desktop Only */}
          <aside className="hidden lg:block w-[280px] h-screen fixed top-0 left-0 z-40">
            <LeftSidebar />
          </aside>

          {/* Mobile Header - Mobile Only */}
          <MobileHeader />

          {/* Main Content Area */}
          <main className="flex-grow lg:ml-[280px] w-full relative pt-16 lg:pt-0 lg:pr-24 min-h-screen">
            <MainContentBackground />
            <SideNav />
            <div className="w-full relative z-10">{children}</div>
          </main>
        </div>
        <JsonLd />
      </body>
    </html>
  );
}
