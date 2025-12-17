import { Metadata } from "next";
import dynamic from "next/dynamic";

const ContactComponent = dynamic(
  () =>
    import("@/components/sections/Contact").then((m) => ({
      default: m.Contact,
    })),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "Contact Me - Get In Touch",
  description:
    "Get in touch with Abdalrahman Hosny for freelance projects, collaboration opportunities, or full-time positions. Available for React.js and Angular development work.",
  alternates: {
    canonical: "https://protfilo-ruddy.vercel.app/contact",
  },
  openGraph: {
    title: "Contact Abdalrahman Hosny - Frontend Developer",
    description:
      "Ready to collaborate on your next project? Let's build something amazing together with React and Angular.",
    url: "https://protfilo-ruddy.vercel.app/contact",
    images: [
      {
        url: "/landing.png",
        width: 800,
        height: 800,
        alt: "Contact Abdalrahman Hosny",
      },
    ],
  },
};
import { PageWrapper } from "@/components/PageWrapper";

export default function ContactPage() {
  return (
    <PageWrapper backgroundVariant="contact">
      <ContactComponent />
    </PageWrapper>
  );
}
