import { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageWrapper } from "@/components/PageWrapper";

const AboutComponent = dynamic(
  () =>
    import("@/components/sections/About").then((m) => ({ default: m.About })),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "About Me - Abdalrahman Hosny",
  description:
    "Learn more about Abdalrahman Hosny, a passionate Frontend Developer specializing in React.js and Angular. Discover my journey, skills, and professional background.",
  alternates: {
    canonical: "https://protfilo-ruddy.vercel.app/about",
  },
  openGraph: {
    title: "About Me - Abdalrahman Hosny | Frontend Developer",
    description:
      "Passionate Frontend Developer skilled in React.js, Angular, TypeScript, and modern web development. Learn about my journey and expertise.",
    url: "https://protfilo-ruddy.vercel.app/about",
    images: [
      {
        url: "/landing.png",
        width: 800,
        height: 800,
        alt: "About Abdalrahman Hosny",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <PageWrapper backgroundVariant="about">
      <AboutComponent />
    </PageWrapper>
  );
}
