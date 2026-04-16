export interface NavLink {
  label: string
  href: string
  hasDropdown?: boolean
}

export interface Stat {
  number: string
  label: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  items: string[]
}

export interface Product {
  id: string
  title: string
  badge: string
  description: string
}

export interface WhyUsPoint {
  title: string
  description: string
}

export interface HeroTag {
  label: string
  accent: boolean
}

export interface ContactInfo {
  phone: string
  email: string
  address: string
  hours: string
}