import { Metadata } from "next";
import dynamic from "next/dynamic";

const ExperienceComponent = dynamic(
  () =>
    import("@/components/sections/Experience").then((m) => ({
      default: m.Experience,
    })),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "Experience - Professional Work History",
  description:
    "Explore Abdalrahman Hosny's professional experience as a Frontend Developer. View detailed work history, accomplishments, and technical contributions in web development.",
  alternates: {
    canonical: "https://protfilo-ruddy.vercel.app/experience",
  },
  openGraph: {
    title: "Professional Experience - Abdalrahman Hosny",
    description:
      "Explore my professional journey and technical accomplishments as a Frontend Developer.",
    url: "https://protfilo-ruddy.vercel.app/experience",
    images: [
      {
        url: "/landing.png",
        width: 800,
        height: 800,
        alt: "Abdalrahman Hosny Professional Experience",
      },
    ],
  },
};
import { PageWrapper } from "@/components/PageWrapper";

export default function ExperiencePage() {
  return (
    <PageWrapper backgroundVariant="experience">
      <ExperienceComponent />
    </PageWrapper>
  );
}
