export interface Feature {
  id: string
  title: string
  description: string
  size: 'large' | 'small'
  image?: string
  icon?: string
  tag?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image?: string
  linkedin?: string
  twitter?: string
}

export interface WorkflowStep {
  id: number | string
  title: string
  description: string
  image?: string
}

export interface NavLink {
  label: string
  href: string
}

export interface CTAButton {
  label: string
  href: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

export interface HeroProps {
  heading: string
  subheading: string
  primaryCTA: CTAButton
  secondaryCTA?: CTAButton
  heroImage: string
  heroImageMobile?: string
  alt?: string
}

export interface RoadmapItem {
  id: string
  quarter: string
  year: string
  title: string
  description: string
  status: 'completed' | 'in-progress' | 'planned'
}

export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  image?: string
  author?: string
  readTime?: string
}

export interface RoadmapItem {
  id: string
  quarter: string
  year: string
  title: string
  description: string
  status: 'completed' | 'in-progress' | 'planned'
}

export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  author?: string
}

export interface RoadmapItem {
  id: string
  quarter: string
  year: string
  title: string
  description: string
  status: 'completed' | 'in-progress' | 'planned'
}

export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  image?: string
  author?: string
  readTime?: string
}

export interface RoadmapItem {
  id: string
  quarter: string
  year: string
  title: string
  description: string
  status: 'completed' | 'in-progress' | 'planned'
}

export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  image?: string
  author?: string
  readTime?: string
}
