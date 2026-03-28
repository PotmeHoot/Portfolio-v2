import { IconName } from "../types";

export interface ShowreelData {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  poster: string;
  videoUrl: string;
  cta: {
    label: string;
    href: string;
  };
}

export const showreelData: ShowreelData = {
  title: "Motion Showreel",
  subtitle: "Events & Large Format",
  description: "A showcase of motion design work for large-scale events, international conferences, and immersive stage environments. From complex screen layouts to on-site visual adaptations, I deliver high-impact content for major live productions.",
  highlights: [
    "Conference Visuals",
    "Stage Screens",
    "Event Motion Design",
    "Large-format Content",
    "On-site Adaptation"
  ],
  poster: "/assets/showreel/poster.jpg",
  videoUrl: "/assets/showreel/reel.mp4",
  cta: {
    label: "Watch Showreel",
    href: "#showreel"
  }
};
