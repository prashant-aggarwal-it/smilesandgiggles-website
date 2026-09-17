export type ImageAsset = {
  src: string;
  alt: string;
};

export type LinkItem = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  numericValue?: number;
  label: string;
};

export type Program = {
  slug: string;
  name: string;
  grades: string;
  description: string;
  topics: string[];
  image: ImageAsset;
  href: string;
};

export type FocusArea = {
  title: string;
  badge?: string;
  description: string;
  image: ImageAsset;
  href: string;
  featured?: boolean;
};

export type GalleryItem = {
  title: string;
  description: string;
  image: ImageAsset;
  size?: "standard" | "wide" | "tall";
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: "school" | "sparkles" | "wrench" | "users" | "presentation" | "chart";
};

export type Outcome = {
  title: string;
  description: string;
};

export type Engagement = {
  label: string;
  title: string;
  description: string;
  images: ImageAsset[];
  href: string;
};

export type PartnerReason = {
  title: string;
  description: string;
  icon: "workflow" | "school" | "blocks" | "expand" | "file" | "shield";
};

export type SupportOption = {
  title: string;
  description: string;
  href: string;
  cta: string;
  icon: "school" | "box" | "lab" | "teacher";
};

export type EmergingOption = {
  title: string;
  description: string;
  href: string;
  cta: string;
  marker: string;
};

export type FieldStory = {
  title: string;
  description: string;
  image: ImageAsset;
  href: string;
};
