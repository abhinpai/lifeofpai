import type {
  FooterContact,
  HeroContent,
  InstagramAccount,
  InstagramPost,
  ItineraryCard,
  NavLink,
  StatItem,
  UGCVideoCard,
  YouTubeVideo,
  WhyPoint,
} from '../types';

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Journey', href: '#journey' },
  { label: 'Itineraries', href: '#itineraries' },
  { label: 'UGC', href: '#ugc' },
  { label: 'Social', href: '#social' },
];

export const footerLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Journey', href: '#journey' },
  { label: 'Itineraries', href: '#itineraries' },
  { label: 'UGC', href: '#ugc' },
  { label: 'Social', href: '#social' },
  { label: 'Brand Collab', href: '#cta' },
];

export const heroContent: HeroContent = {
  title: 'We balance desk jobs with dreams of adventure.',
  subtitle: "Here's how we do both. Real travel stories. Real budgets. Real couple moments.",
  ctaLabel: 'Start with our story',
  ctaHref: '#journey',
  secondaryCtaLabel: 'Brand collaboration',
  secondaryCtaHref: '#cta',
  backgroundImage:
    'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=2000',
  videoSrc: '/assets/videos/hero.mp4',
};

export const stats: StatItem[] = [
  { value: '25+', label: 'Trips done on PTO days' },
  { value: '18', label: 'Travel itineraries published' },
  { value: '40+', label: 'UGC videos delivered' },
  { value: '12', label: 'Brand collaborations' },
];

export const whyPoints: WhyPoint[] = [
  { id: 'w-1', label: 'Every vacation day planned to perfection. Every weekend maximized.' },
  { id: 'w-2', label: 'Budget-first itineraries built from our real trips.' },
  { id: 'w-3', label: 'UGC clips built around products we actually use while traveling.' },
  { id: 'w-4', label: 'Simple systems for couples balancing work, life, and adventure.' },
];

export const storyImages = {
  one: 'https://images.unsplash.com/photo-1517825738774-7de9363ef735?auto=format&fit=crop&w=900&q=80',
  two: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=900&q=80',
  three: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80',
};

export const itineraryCards: ItineraryCard[] = [
  {
    id: 'it-1',
    title: 'How we explored Utah on $500 and 3 days off',
    subtitle: 'Utah, USA',
    description:
      'A complete long-weekend plan with route map, food spots, stay options, and exact spend tracking.',
    duration: '3 Days',
    budget: '$500',
    images: [
      'https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1508261303786-62c5b6ffb2ef?auto=format&fit=crop&w=1600&q=80',
    ],
    tags: ['PTO Friendly', 'Road Trip', 'Hikes'],
  },
  {
    id: 'it-2',
    title: 'Mexico City food + culture itinerary for full-time workers',
    subtitle: 'Mexico City, MX',
    description:
      'Balanced day plans for museums, food trails, and chill blocks so you can travel without burnout.',
    duration: '4 Days',
    budget: '$820',
    images: [
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1512813382946-30cbb9f7f8db?auto=format&fit=crop&w=1600&q=80',
    ],
    tags: ['Food First', 'Culture', 'Couple Travel'],
  },
  {
    id: 'it-3',
    title: 'Bali workation blueprint: meetings by day, sunsets by evening',
    subtitle: 'Bali, Indonesia',
    description:
      'Wifi-tested stays, creator-friendly spots, and realistic timelines for remote-working couples.',
    duration: '7 Days',
    budget: '$1,260',
    images: [
      'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1558005530-a7958896ec60?auto=format&fit=crop&w=1600&q=80',
    ],
    tags: ['Work + Travel', 'Creator Spots', 'Nature'],
  },
  {
    id: 'it-4',
    title: 'Dolomites cinematic drive plan with sunrise checkpoints',
    subtitle: 'Dolomites, Italy',
    description:
      'A route-by-route guide designed for scenic drives, iconic viewpoints, and short trail breaks.',
    duration: '5 Days',
    budget: '$1,100',
    images: [
      'https://images.unsplash.com/photo-1601758003122-53c40e686a19?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1455156218388-5e61b526818b?auto=format&fit=crop&w=1600&q=80',
    ],
    tags: ['Scenic Drive', 'Photo Stops', 'Moderate Budget'],
  },
];

export const ugcVideoCards: UGCVideoCard[] = [
  {
    id: 'ugc-1',
    title: 'Carry-on test on a mountain trip',
    description: 'Real products we actually use on real trips.',
    poster:
      'https://images.unsplash.com/photo-1501554728187-ce583db33af7?auto=format&fit=crop&w=1200&q=80',
    videoSrc: 'https://videos.pexels.com/video-files/857195/857195-hd_1920_1080_25fps.mp4',
  },
  {
    id: 'ugc-2',
    title: 'Sunrise coffee ritual at the cabin',
    description: 'Natural light, no staged set, just authentic moment capture.',
    poster:
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
    videoSrc: 'https://videos.pexels.com/video-files/3129595/3129595-hd_1920_1080_30fps.mp4',
  },
  {
    id: 'ugc-3',
    title: 'Trail skincare + recovery sequence',
    description: 'Shot after a real hike with product-in-context storytelling.',
    poster:
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80',
    videoSrc: 'https://videos.pexels.com/video-files/5793308/5793308-hd_1920_1080_25fps.mp4',
  },
];

export const youtubeVideos: YouTubeVideo[] = [
  {
    id: 'yt-1',
    title: 'Latest travel vlogs and itinerary breakdowns',
    url: 'https://www.youtube.com/@lifeofpais',
    thumbnail:
      'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'yt-2',
    title: 'UGC campaign behind-the-scenes and trip workflow',
    url: 'https://www.youtube.com/@lifeofpais',
    thumbnail:
      'https://images.unsplash.com/photo-1501554728187-ce583db33af7?auto=format&fit=crop&w=1200&q=80',
  },
];

export const instagramAccounts: InstagramAccount[] = [
  {
    id: 'ig-account-1',
    handle: '@twin_thumb',
    bio: 'Visual travel frames and short scenic edits.',
    profileUrl: 'https://www.instagram.com/twin_thumb',
  },
  {
    id: 'ig-account-2',
    handle: '@coupleofpai',
    bio: 'Couple travel diaries, budgets, and creator moments.',
    profileUrl: 'https://www.instagram.com/coupleofpai',
  },
];

export const instagramPosts: InstagramPost[] = [
  {
    id: 'ig-1',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
    href: 'https://www.instagram.com/coupleofpai',
  },
  {
    id: 'ig-2',
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
    href: 'https://www.instagram.com/twin_thumb',
  },
  {
    id: 'ig-3',
    image:
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
    href: 'https://www.instagram.com/coupleofpai',
  },
  {
    id: 'ig-4',
    image:
      'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=800&q=80',
    href: 'https://www.instagram.com/twin_thumb',
  },
];

export const finalBannerImage =
  'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=2000';

export const footerContact: FooterContact = {
  address: 'Based in the U.S. Working worldwide.',
  phone: 'coupleofpai@gmail.com',
};
