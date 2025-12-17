import { MetadataRoute } from "next";
import { personalInfo } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${personalInfo.name} - Frontend Developer Portfolio`,
    short_name: "Abdalrahman",
    description:
      "Frontend Developer specialized in React.js, Angular, and modern web technologies",
    start_url: "/",
    display: "standalone",
    background_color: "#1a1a1a",
    theme_color: "#FEF418",
    icons: [
      {
        src: "/landing.png",
        sizes: "192x192 512x512",
        type: "image/png",
      },
    ],
  };
}
