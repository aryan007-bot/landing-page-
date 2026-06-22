export interface NavItem {
  name: string
  href: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  gradient: string
  size: "sm" | "md" | "lg" | "xl"
  colSpan?: number
  rowSpan?: number
}

export interface Scene {
  id: string
  title: string
  subtitle: string
  description: string
  gradient: string
  icon: string
}

export interface Stat {
  value: string
  label: string
  suffix: string
}

export interface Feature {
  id: string
  title: string
  description: string
  icon: string
}

export interface CaseStudy {
  id: string
  title: string
  category: string
  description: string
  metrics: { label: string; value: string }[]
  gradient: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar: string
}

export interface ProcessStep {
  id: string
  title: string
  description: string
  icon: string
}
