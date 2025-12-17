import { Metadata } from "next";
import { Education as EducationComponent } from "@/components/sections/Education";

export const metadata: Metadata = {
  title: "Education - Academic Background",
  description:
    "Discover Abdalrahman Hosny's educational background, academic achievements, and professional certifications in Computer Science and Web Development.",
  alternates: {
    canonical: "https://protfilo-ruddy.vercel.app/education",
  },
  openGraph: {
    title: "Education & Certifications - Abdalrahman Hosny",
    description:
      "Explore my academic journey, certifications, and continuous learning in web development and computer science.",
    url: "https://protfilo-ruddy.vercel.app/education",
    images: [
      {
        url: "/landing.png",
        width: 800,
        height: 800,
        alt: "Abdalrahman Hosny Education",
      },
    ],
  },
};
import { PageWrapper } from "@/components/PageWrapper";

export default function EducationPage() {
  return (
    <PageWrapper>
      <div className="space-y-20">
        <EducationComponent />
      </div>
    </PageWrapper>
  );
}
