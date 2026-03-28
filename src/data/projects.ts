import { Project } from "../types";

/**
 * Real portfolio anchors:
 * 1. Biedronka — static social media graphics
 * 2. Google — static campaign / educational graphics
 * 3. Hartmann / MoliCare — static social campaign graphics
 * 4. TV Markíza — video / motion content
 * 5. AI-Assisted Visual Production — video / motion content
 */

export const projects: Project[] = [
  {
    id: "biedronka-social",
    title: "Biedronka Social Media Content",
    client: "Biedronka",
    agency: "MAYER/McCANN",
    category: "Social Media Graphics",
    type: "Social Content",
    shortDescription: "High-performance social media graphics and carousels for Poland's largest supermarket chain.",
    deliverables: ["Social Media Graphics", "Carousel Design", "Campaign Visuals"],
    mediaType: "image",
    status: "ready",
    year: "2024-2025",
    platforms: ["Instagram", "Facebook"],
    poster: "/assets/work/biedronka/poster.jpg",
    previewImages: [
      "/assets/work/biedronka/preview-01.jpg",
      "/assets/work/biedronka/preview-02.jpg",
      "/assets/work/biedronka/preview-03.jpg"
    ]
  },
  {
    id: "google-educational",
    title: "Google Educational Graphics",
    client: "Google",
    category: "Campaign Visuals",
    type: "Graphic Design",
    shortDescription: "Educational and campaign graphics designed for Google's internal and external initiatives.",
    deliverables: ["Educational Graphics", "Campaign Assets", "Digital Design"],
    mediaType: "image",
    status: "ready",
    year: "2023",
    platforms: ["Web", "Internal"],
    poster: "/assets/work/google/poster.jpg",
    previewImages: [
      "/assets/work/google/preview-01.jpg",
      "/assets/work/google/preview-02.jpg"
    ]
  },
  {
    id: "molicare-social",
    title: "Hartmann / MoliCare Campaigns",
    client: "Hartmann / MoliCare",
    category: "Social Media Campaigns",
    type: "Visual Production",
    shortDescription: "Comprehensive social media campaign visuals for healthcare and hygiene products.",
    deliverables: ["Social Media Visuals", "Key Visuals", "Campaign Strategy"],
    mediaType: "image",
    status: "ready",
    year: "2024",
    platforms: ["Instagram", "Facebook", "LinkedIn"],
    poster: "/assets/work/molicare/poster.jpg",
    previewImages: [
      "/assets/work/molicare/preview-01.jpg",
      "/assets/work/molicare/preview-02.jpg",
      "/assets/work/molicare/preview-03.jpg"
    ]
  },
  {
    id: "tv-markiza-motion",
    title: "TV Markíza Motion & Video",
    client: "TV Markíza",
    category: "Motion Graphics",
    type: "Video & Motion",
    shortDescription: "Dynamic motion graphics and video content for social media and broadcast promotion.",
    deliverables: ["Motion Graphics", "Video Editing", "Social Content"],
    mediaType: "video",
    status: "ready",
    year: "2024",
    platforms: ["TV", "Instagram", "TikTok"],
    poster: "/assets/work/markiza/poster.jpg",
    previewVideo: "/assets/work/markiza/preview.mp4"
  },
  {
    id: "ai-visual-production",
    title: "AI-Assisted Visual Production",
    client: "Personal / R&D",
    category: "AI Visuals",
    type: "Video & Motion",
    shortDescription: "Exploring the intersection of AI-assisted imagery and commercial motion design.",
    deliverables: ["AI Imagery", "Concept Art", "Production Workflows"],
    mediaType: "video",
    status: "ready",
    year: "2025",
    poster: "/assets/work/motion/poster.jpg",
    previewVideo: "/assets/work/motion/preview.mp4"
  }
];
