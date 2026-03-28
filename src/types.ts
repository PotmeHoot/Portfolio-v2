import * as LucideIcons from "lucide-react";

export type IconName = keyof typeof LucideIcons;

export interface NavLink {
  id: string;
  label: string;
}

export interface Service {
  icon: IconName;
  title: string;
  items: string[];
}

export interface PricingPackage {
  name: string;
  price: string;
  features: string[];
  popular: boolean;
}

export interface ExperienceItem {
  icon: IconName;
  title: string;
  desc: string;
}

export interface ToolItem {
  name: string;
  level: string;
  desc: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export type ProjectStatus = 'ready' | 'coming_soon' | 'hidden';
export type MediaType = 'image' | 'video' | 'mixed';
export type ProjectType = 'social' | 'motion' | 'AR' | 'AI' | 'campaign' | string;

export interface Project {
  id: string;
  title: string;
  client: string;
  agency?: string;
  category: string;
  type: string;
  shortDescription: string;
  deliverables: string[];
  mediaType: MediaType;
  poster?: string;
  previewImages?: string[];
  previewVideo?: string;
  platforms?: string[];
  status: ProjectStatus;
  year?: string;
}

export interface ARFilter {
  id: string;
  title: string;
  platform: 'Instagram' | 'TikTok' | 'Snapchat';
  previewImage?: string;
  qrCode?: string;
  link?: string;
  status: ProjectStatus;
}

export interface CollaborationStep {
  id: string;
  title: string;
  description: string;
  icon: IconName;
}

export interface HeroAssets {
  main: string;
  supporting1: string;
  supporting2: string;
}
