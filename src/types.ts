/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // From Lucide icons
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  views: number;
  image: string;
  description: string;
  client: string;
  date: string;
  technologies: string[];
}

export interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  rating: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  company: string;
  title: string;
  date: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  category: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  deliveryTime: string;
  revisions: string;
}

export interface BlogItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  content: string;
}
