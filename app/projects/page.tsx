import { Metadata } from "next";
import dynamic from "next/dynamic";

const ProjectsComponent = dynamic(
  () =>
    import("@/components/sections/Projects").then((m) => ({
      default: m.Projects,
    })),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "Projects - Portfolio",
  description:
    "Explore my portfolio of web development projects built with React.js, Angular, Bootstrap, and modern web technologies. Showcasing real-world applications including consulting platforms, e-commerce apps, and educational tools.",
  alternates: {
    canonical: "https://protfilo-ruddy.vercel.app/projects",
  },
  openGraph: {
    title: "Projects Portfolio - Abdalrahman Hosny | Frontend Developer",
    description:
      "Explore my portfolio of modern web applications built with React.js, Angular, and cutting-edge technologies.",
    url: "https://protfilo-ruddy.vercel.app/projects",
    images: [
      {
        url: "/landing.png",
        width: 800,
        height: 800,
        alt: "Abdalrahman Hosny Projects Portfolio",
      },
    ],
  },
};
import { PageWrapper } from "@/components/PageWrapper";

export default function ProjectsPage() {
  return (
    <PageWrapper backgroundVariant="projects">
      <ProjectsComponent />
    </PageWrapper>
  );
}
