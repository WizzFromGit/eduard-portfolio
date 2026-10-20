import { Link } from 'react-router-dom'
import {
  Mail,
  Code,
  Briefcase,
  Settings,
  User,
  ExternalLink,
} from 'lucide-react'

const ACTIONS = [
  { label: 'View Projects', href: '/projects', icon: Code },
  { label: 'View Experience', href: '/experience', icon: Briefcase },
  { label: 'View Skills', href: '/skills', icon: Settings },
  { label: 'Contact Me', href: '/contact', icon: Mail },
  { label: 'About Me', href: '/about', icon: User },
  { label: 'Download CV', href: '/pdf-resume/resume%20(1).pdf', icon: ExternalLink, external: true },
]

export default function QuickActions() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {ACTIONS.map((action) => {
        const Icon = action.icon
        return (
          <Link
            key={action.label}
            to={action.external ? undefined : action.href}
            href={action.external ? action.href : undefined}
            target={action.external ? '_blank' : undefined}
            rel={action.external ? 'noopener noreferrer' : undefined}
            className="flex items-center gap-3 rounded-xl border border-border bg-background px-3 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-primary transition-colors group"
          >
            <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Icon className="h-4 w-4" />
            </div>
            <span>{action.label}</span>
          </Link>
        )
      })}
    </div>
  )
}
