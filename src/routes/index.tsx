import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoGrid from "@/components/VideoGrid";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dillon & Bird — Driving Growth & Innovation Across the GCC" },
      {
        name: "description",
        content:
          "Dillon & Bird: Your dedicated strategic partner in the GCC. We blend finance, tech, and marketing to unlock your growth.",
      },
      { property: "og:title", content: "Dillon & Bird — Growth & Innovation" },
      {
        property: "og:description",
        content:
          "Strategic partnership, sustainable value, and future-forward solutions across the GCC.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <VideoGrid />
    </div>
  );
}
