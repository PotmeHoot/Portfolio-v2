import { Project } from "../types";

/**
 * Real portfolio anchors:
 * - Biedronka — social content via MAYER/McCANN
 * - Google — educational or campaign graphics
 * - Hartmann / MoliCare — social media campaign visuals
 * - Raiffeisen Bank — campaign visuals / banners
 * - TV Markíza — motion / video / social content
 * - AR Filters — Instagram and TikTok work
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
    platforms: ["Instagram", "Facebook"]
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
    platforms: ["Web", "Internal"]
  },
  {
    id: "molicare-social",
    title: "Hartmann / MoliCare Campaigns",
    client: "Hartmann / MoliCare",
    category: "Social Media Campaigns",
    type: "Visual Production",
    shortDescription: "Comprehensive social media campaign visuals for healthcare and hygiene products.",
    deliverables: ["Social Media Visuals", "Key Visuals", "Campaign Strategy"],
    mediaType: "mixed",
    status: "ready",
    year: "2024",
    platforms: ["Instagram", "Facebook", "LinkedIn"]
  },
  {
    id: "raiffeisen-bank-visuals",
    title: "Raiffeisen Bank Campaign Visuals",
    client: "Raiffeisen Bank",
    category: "Banking & Finance",
    type: "Campaign Visuals",
    shortDescription: "Digital campaign visuals and banners for banking services and seasonal promotions.",
    deliverables: ["Digital Banners", "Campaign Visuals", "Social Media Assets"],
    mediaType: "image",
    status: "ready",
    year: "2023",
    platforms: ["Web", "Social Media"]
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
    platforms: ["TV", "Instagram", "TikTok"]
  },
  {
    id: "ai-visual-production",
    title: "AI-Assisted Visual Production",
    client: "Personal / R&D",
    category: "AI Visuals",
    type: "Experimental",
    shortDescription: "Exploring the intersection of AI-assisted imagery and commercial graphic design.",
    deliverables: ["AI Imagery", "Concept Art", "Production Workflows"],
    mediaType: "mixed",
    status: "coming_soon",
    year: "2025"
  }
];
