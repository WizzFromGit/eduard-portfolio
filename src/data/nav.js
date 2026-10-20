import {
  LayoutDashboard,
  User,
  Code,
  Settings,
  Briefcase,
  Mail,
} from 'lucide-react'

export const NAV_ITEMS = [
  { name: 'Overview', href: '/', icon: LayoutDashboard },
  { name: 'About Me', href: '/about', icon: User },
  { name: 'Projects', href: '/projects', icon: Code },
  { name: 'Skills', href: '/skills', icon: Settings },
  { name: 'Experience', href: '/experience', icon: Briefcase },
  { name: 'Contact', href: '/contact', icon: Mail },
]

export const LOGO_TEXT = 'Eduard'
