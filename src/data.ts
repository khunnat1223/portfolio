/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Service,
  PortfolioItem,
  TimelineItem,
  TestimonialItem,
  ClientLogo,
  PricingTier,
  BlogItem
} from "./types";

export const SERVICES_DATA: Service[] = [
  {
    id: "1",
    title: "Business Strategy",
    description: "I construct robust business frameworks and growth methodologies that connect your digital products directly to real-world market success.",
    iconName: "Briefcase"
  },
  {
    id: "2",
    title: "App Development",
    description: "Building production-ready, highly reactive web and native architectures designed with speed, robustness, and flawless responsive layouts.",
    iconName: "Code"
  },
  {
    id: "3",
    title: "UI/UX Design",
    description: "Crafting beautiful interactive designs that focus on ease of navigation, user delight, premium typography, and clean visual structures.",
    iconName: "Monitor"
  },
  {
    id: "4",
    title: "Mobile App Development",
    description: "Designing and developing responsive, cross-platform mobile apps that work flawlessly across iOS and Android with beautiful transitions.",
    iconName: "Smartphone"
  },
  {
    id: "5",
    title: "SEO & Growth Marketing",
    description: "Optimizing code architecture and content paths to ensure search engines rank your projects at the top while driving organic conversions.",
    iconName: "TrendingUp"
  },
  {
    id: "6",
    title: "Creative Design Solutions",
    description: "Delivering customized branding assets, custom vector illustrations, and interactive vector animations that represent your company story.",
    iconName: "Sparkles"
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "p1",
    title: "The services provide for design",
    category: "DEVELOPMENT",
    views: 600,
    image: "../src/assets/images/Group 7.png",
    description: "A comprehensive developer portal created for a fintech enterprise, featuring customizable analytical dashboards, live API telemetry feeds, and a secure multi-tenant environment. The dashboard uses advanced charting models to show system throughput, transaction histories, and real-time ledger updates.",
    client: "Jam Sok",
    date: "May 2025 - Dec 2025",
    technologies: ["Excel", "Excel VBA", "Access"]
  },
  {
    id: "p2",
    title: "Mobile app landing design & app maintain",
    category: "APPLICATION",
    views: 750,
    image: "../src/assets/images/Group 8.png",
    description: "A fast, sleek, and high-performance landing page and marketing funnel built for a modern mental wellness app. Includes micro-interactions, responsive device mockups, custom vector illustrations, and direct App Store/Google Play integrations with conversion tracking.",
    client: "Serene Mindfulness Inc.",
    date: "Jan 2026 - Mar 2026",
    technologies: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"]
  },
  {
    id: "p3",
    title: "Logo design creativity & Application",
    category: "PHOTOSHOP",
    views: 630,
    image: "../src/assets/images/Group 122.png",
    description: "An elegant and minimalist rebranding project for an upscale organic coffee house chain. The project encompasses logo typography variations, packaging design guidelines, brand styleguides, high-fidelity mockups, and corporate collateral layout.",
    client: "Roasters & Co.",
    date: "Aug 2025 - Oct 2025",
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Branding Design"]
  },
  {
    id: "p4",
    title: "Static Website",
    category: "DEVELOPMENT",
    views: 360,
    image: "../src/assets/images/Group 11.png",
    description: "Static Website for branding.",
    client: "PulseFit Ecosystem",
    date: "Sep 2025 - Nov 2025",
    technologies: ["React JS", "Tailwind CSS"]
  },
  {
    id: "p5",
    title: "POS-System",
    category: "DEVELOPMENT",
    views: 280,
    image: "../src/assets/images/Group 19.png",
    description: "Sale management system.",
    client: "Sok Dara",
    date: "Feb 2026 - Apr 2026",
    technologies: ["NodeJS", "ExpressJS", "ReactJS", "TailwindCSS"]
  }
];

export const EDUCATION_DATA: TimelineItem[] = [
  {
    id: "e1",
    title: "IT",
    subtitle: "University of Battambang (2020 - 2024)",
    date: "2020 - 2024",
    rating: "4.30/5",
    description: "In-depth training in information technology skills, web architecture, interactive components, and basic computer science structures."
  },
  {
    id: "e2",
    title: "Computer Program for JOb",
    subtitle: "Master-IT School",
    date: "2021 - 2022",
    rating: "4.50/5",
    description: "Studying and understanding office computer software."
  },
  {
    id: "e3",
    title: "UX/UI specialist training class",
    subtitle: "LinkIn Website",
    date: "2022 - 2023",
    rating: "4.80/5",
    description: "Learn about UX/UI Design skills."
  }
];

export const EXPERIENCE_DATA: TimelineItem[] = [
  {
    id: "x1",
    title: "Website development",
    subtitle: "Create a promotional website (2024 - 2025)",
    date: "2024 - 2025",
    rating: "4.70/5",
    description: "Website promoting shopping."
  },
  {
    id: "x2",
    title: "UI/UX Developer",
    subtitle: "Freelancer",
    date: "2024 - 2025",
    rating: "4.95/5",
    description: "UX/UI Desing."
  },
  {
    id: "x3",
    title: "E-Commerce Website",
    subtitle: "Works at Plugin Development (2025 - 2026)",
    date: "2025 - Present",
    rating: "5.00/5",
    description: "Create an online shopping website."
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t1",
    clientName: "Nevine Acotanza",
    role: "Chief Operating Officer",
    company: "Rainbow-Themes",
    title: "Android App Development",
    date: "via Upwork - Mar 4, 2015 - Aug 30, 2021",
    rating: 5,
    comment: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Jone is an absolute wizard when it comes to React animations. Our conversion rate increased by 40% after launching the new responsive client dashboard he crafted.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60"
  },
  {
    id: "t2",
    clientName: "Martha Smithes",
    role: "Director of Marketing",
    company: "Studio by A.Lin",
    title: "Creative Brand Overhaul",
    date: "Direct Client - Nov 12, 2023",
    rating: 5,
    comment: "Jone was incredible in redefining our global visual style. From color gradients to custom vector icons, everything was beautifully executed. The website is incredibly fast and receives daily compliments from our investors. Highly recommended for any serious web project!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=60"
  },
  {
    id: "t3",
    clientName: "John Due",
    role: "Lead Systems Architect",
    company: "Nexus AI Computing",
    title: "AI Dashboard Implementation",
    date: "via LinkedIn - Jan 22, 2024",
    rating: 5,
    comment: "Outstanding technical skill coupled with clean design sensibilities. Jone took a highly complex, telemetry-heavy dataset and organized it into an intuitive, interactive canvas that flows beautifully. His work with state caching dramatically speeded up our system.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=60"
  }
];

export const CLIENT_LOGOS: ClientLogo[] = [
  // JavaScript
  { id: "c1", name: "John Due", category: "JavaScript" },
  { id: "c2", name: "Smiths Marth", category: "JavaScript" },
  { id: "c3", name: "Add Dev", category: "JavaScript" },
  { id: "c4", name: "Jone Due", category: "JavaScript" },
  { id: "c5", name: "John Due", category: "JavaScript" },
  { id: "c6", name: "Adon Smith", category: "JavaScript" },
  { id: "c7", name: "Smitha Mila", category: "JavaScript" },
  { id: "c8", name: "Sultana Mila", category: "JavaScript" },
  { id: "c9", name: "Jannat", category: "JavaScript" },
  { id: "c10", name: "Mila Dus", category: "JavaScript" },
  { id: "c11", name: "Marth Smiths", category: "JavaScript" },
  { id: "c12", name: "Marth Smiths", category: "JavaScript" },

  // Product Design
  { id: "cp1", name: "Figma Pro", category: "Product Design" },
  { id: "cp2", name: "Studio by A.Lin", category: "Product Design" },
  { id: "cp3", name: "Pixel Perfect", category: "Product Design" },
  { id: "cp4", name: "Creative Mind", category: "Product Design" },
  { id: "cp5", name: "UX Labs", category: "Product Design" },
  { id: "cp6", name: "Aesthetic Co", category: "Product Design" },

  // Wordpress
  { id: "cw1", name: "PressTech", category: "Wordpress" },
  { id: "cw2", name: "WP Wizard", category: "Wordpress" },
  { id: "cw3", name: "Blogify", category: "Wordpress" },
  { id: "cw4", name: "ThemeCraft", category: "Wordpress" },

  // HTML to React
  { id: "cr1", name: "ConvertFlow", category: "HTML to React" },
  { id: "cr2", name: "Reactify", category: "HTML to React" },
  { id: "cr3", name: "JSX Masters", category: "HTML to React" },
  { id: "cr4", name: "Componentize", category: "HTML to React" },

  // React to Laravel
  { id: "cl1", name: "BladeReact", category: "React to Laravel" },
  { id: "cl2", name: "PHP Devs", category: "React to Laravel" },
  { id: "cl3", name: "Larastack", category: "React to Laravel" },

  // Python
  { id: "cpy1", name: "Django Masters", category: "Python" },
  { id: "cpy2", name: "PyData Corp", category: "Python" },
  { id: "cpy3", name: "AI Brains", category: "Python" }
];

export const PRICING_DATA: Record<string, PricingTier> = {
  static: {
    id: "pr1",
    name: "Static Portfolio Design",
    price: 35.00,
    description: "Perfect for entry-level developers or designers looking to establish their initial digital footprint with a clean, static portfolio.",
    features: [
      "1 Page with modern sections",
      "Responsive Layout design",
      "Content Upload assistance",
      "Social media integration",
      "Fully responsive on mobile",
      "Clean semantic HTML structure",
      "Custom brand color accents",
      "1 Revision cycle Included"
    ],
    deliveryTime: "3 Days Delivery",
    revisions: "1 Revision"
  },
  standard: {
    id: "pr2",
    name: "Standard Dynamic Web App",
    price: 50.00,
    description: "Our recommended tier for established professionals. Includes beautiful animations, filterable components, and interactive contact forms.",
    features: [
      "Multi-section single page or 3 Pages",
      "Design Customization in Figma",
      "Interactive components (tabs, sliders)",
      "Motion layout micro-animations",
      "Custom styled pricing models",
      "Filterable Portfolio grid",
      "2 Custom Plugins/Extensions integration",
      "Unlimited Revisions & 5 Days Delivery"
    ],
    deliveryTime: "5 Days Delivery",
    revisions: "Unlimited Revisions"
  },
  premium: {
    id: "pr3",
    name: "Premium Full-Stack Brand Experience",
    price: 99.00,
    description: "The ultimate solution for agencies or premium brands. Full-stack capability, persistent contact submissions, SEO dashboard, and bespoke animations.",
    features: [
      "Full-stack Express/React architecture",
      "Multipage customized workspace",
      "Premium custom vector artwork",
      "Persistent cloud database (Firebase/Firestore)",
      "High-performance SEO scoring",
      "Custom email notifications for contact submissions",
      "8 Custom Plugins/Extensions",
      "Unlimited Revisions & Lifetime Support"
    ],
    deliveryTime: "7 Days Delivery",
    revisions: "Unlimited Revisions"
  }
};

export const BLOG_DATA: BlogItem[] = [
  {
    id: "b1",
    title: "T-shirt design is the part of design and beauty",
    category: "CANADA",
    readTime: "2 min read",
    date: "Mar 15, 2026",
    image: "https://scontent.fpnh11-2.fna.fbcdn.net/v/t39.30808-6/468195735_122123622962514021_9155211533795172643_n.jpg?stp=dst-jpg_tt6&cstp=mx960x958&ctp=s960x958&_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeE-MMmjQTO3-Sylz4U-nJV7dRDrPAc8pU51EOs8BzylTvsi8JH5qK11Ks5fcQJnfl6SnQKl9PCg-Ixxi4Lf9YsV&_nc_ohc=sNz2O7rho7gQ7kNvwG3xzx0&_nc_oc=AdqtE0iT7qt0XVw1zL2IWkHeOPRvbADPaQpIv6DpHuruUo5cekgamxWRMQllX64_ycc&_nc_zt=23&_nc_ht=scontent.fpnh11-2.fna&_nc_gid=3VDPfqouhcVDjDzuWtQjvg&_nc_ss=7b2a8&oh=00_AQDfR9k_zrG5Ioeok-yXEXT7AR7peyUzcc_rEUyCSwcnFg&oe=6A4A4443",
    content: "Design is not just what it looks like and feels like. Design is how it works. T-shirt design represents a powerful, wearable medium of self-expression. In this article, we explore how minimalist layouts, bold hand-lettered typography, and vector layouts have shifted modern casual apparel, transforming garments into highly effective conversational canvases."
  },
  {
    id: "b2",
    title: "The services provide for design & core maintain",
    category: "DEVELOPMENT",
    readTime: "2 hours read",
    date: "Apr 2, 2026",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop&q=60",
    content: "Providing robust digital services requires ongoing support, microservice debugging, and clean caching patterns. In this piece, Jone Lee walks you through standard React hooks, custom state providers, and how local storage models can be combined with CSS custom variables to achieve highly resilient and instantly loading web ecosystems."
  },
  {
    id: "b3",
    title: "Mobile app landing design & app maintain",
    category: "APPLICATION",
    readTime: "5 min read",
    date: "May 10, 2026",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=60",
    content: "Mobile optimization has moved past simple media queries. Today, success requires absolute speed, touch target compliance, screen-edge gutters, and smart asset prefetching. We break down standard conversion triggers, showcasing real Figma wireframes and custom CSS code snippets that keep app download rates high and churn rates minimal."
  }
];
