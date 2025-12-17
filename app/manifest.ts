import { MetadataRoute } from "next";
import { personalInfo } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${personalInfo.name} - Front-End Developer Portfolio`,
    short_name: "Hamdi Dev",
    description:
      "Professional Front-End Developer specialized in React.js, Next.js, and modern web technologies",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#3b82f6",
    icons: [
      {
        src: "/favicon.png",
        sizes: "32x32 64x64 128x128 192x192 512x512",
        type: "image/png",
      },
    ],
  };
}
