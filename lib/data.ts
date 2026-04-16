export const NAV_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Products', href: '/products' },
  { label: 'Projects', href: '/projects' },
  { label: 'About',    href: '/about' },
  { label: 'Contact',  href: '/contact' },
]

export const SERVICE_DROPDOWN = [
  { label: 'Civil Construction',      href: '/services#civil' },
  { label: 'Renovation & Interiors',  href: '/services#renovation' },
  { label: 'Electrical & Utility',    href: '/services#electrical' },
  { label: 'Exterior & Finishing',    href: '/services#exterior' },
]

export const STATS = [
  { number: '50+',  label: 'Projects Completed' },
  { number: '8+',   label: 'Years Experience' },
  { number: '100%', label: 'Client Satisfaction' },
  { number: '4',    label: 'Service Verticals' },
]

export const SERVICES = [
  {
    id: 'civil',
    title: 'Civil Construction',
    description: 'End-to-end civil works for residential and commercial projects, built to last.',
    icon: 'building',
    items: ['Residential Buildings', 'Commercial Buildings', 'RCC Structure Work', 'Foundation & Structural Execution'],
  },
  {
    id: 'renovation',
    title: 'Renovation & Interiors',
    description: 'Transforming spaces with thoughtful renovation and premium interior solutions.',
    icon: 'interior',
    items: ['Renovation & Repair Works', 'False Ceiling & Partition', 'Modular Office & Home Interiors', 'Flooring & Finishing'],
  },
  {
    id: 'electrical',
    title: 'Electrical & Utility',
    description: 'Safe, efficient electrical installations and lighting design for every project.',
    icon: 'electrical',
    items: ['Electrical Setup', 'Lighting Design & Installation', 'Panel & Wiring Works'],
  },
  {
    id: 'exterior',
    title: 'Exterior & Finishing',
    description: 'Elevate your building\'s facade with expert finishing and cladding solutions.',
    icon: 'exterior',
    items: ['Building Elevation & Facade', 'Painting & Texture Coating', 'Cladding (ACP, Glass, etc.)', 'Waterproofing Solutions'],
  },
]

export const PRODUCTS = [
  { id: 'prefab',      title: 'Prefabricated Structures',      badge: 'Prefab',    description: 'Custom-engineered prefab units for residential and commercial use.' },
  { id: 'peb',         title: 'Pre-Engineered Buildings',       badge: 'PEB',       description: 'Steel PEB systems for industrial and commercial applications.' },
  { id: 'site-office', title: 'Site Offices',                   badge: 'Office',    description: 'Portable modular site office cabins ready for quick deployment.' },
  { id: 'warehouse',   title: 'Warehouses & Industrial Sheds',  badge: 'Industrial',description: 'Large-span warehouse structures engineered for maximum efficiency.' },
  { id: 'modular',     title: 'Modular Structures',             badge: 'Modular',   description: 'Flexible modular systems adaptable to any space or requirement.' },
  { id: 'farmhouse',   title: 'Farmhouses',                     badge: 'Farmhouse', description: 'Premium prefab farmhouse structures with modern aesthetics.' },
]

export const WHY_US = [
  { title: 'End-to-end delivery',   description: 'From design and fabrication to site execution and final handover.' },
  { title: 'Quality assurance',     description: 'ISO-compliant processes and premium materials on every project.' },
  { title: 'On-time completion',    description: 'Structured project management that keeps timelines on track.' },
  { title: 'Eco-conscious builds',  description: 'Sustainable materials and green construction practices.' },
]

export const HERO_TAGS = [
  { label: 'Prefab & Modular',       accent: true },
  { label: 'Civil Construction',      accent: true },
  { label: 'Renovation & Interiors',  accent: true },
  { label: 'Electrical',              accent: false },
  { label: 'Exterior & Finishing',    accent: false },
]

export const CONTACT_INFO = {
  phone:   '+91 XXXXX XXXXX',
  email:   'info@greenforgen.com',
  address: 'Greenforgen Office, Your City, State — PIN',
  hours:   'Mon – Sat: 9:00 AM – 6:00 PM',
}