export type NavLink = {
  label: string;
  href: string;
};

export type HeroContent = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  backgroundImage: string;
  videoSrc: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type WhyPoint = {
  id: string;
  label: string;
};

export type ItineraryCard = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  budget: string;
  images: string[];
  tags: string[];
};

export type UGCVideoCard = {
  id: string;
  title: string;
  description: string;
  poster: string;
  videoSrc: string;
};

export type YouTubeVideo = {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
};

export type InstagramPost = {
  id: string;
  image: string;
  href: string;
};

export type InstagramAccount = {
  id: string;
  handle: string;
  bio: string;
  profileUrl: string;
};

export type FooterContact = {
  address: string;
  phone: string;
};
