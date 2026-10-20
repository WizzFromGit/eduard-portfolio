import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import {
  X,
  ChevronRight,
  LayoutDashboard,
  User,
  Code,
  Settings,
  Briefcase,
  Mail,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_ITEMS } from '@/data/nav'

const ICONS = {
  Overview: LayoutDashboard,
  'About Me': User,
  Projects: Code,
  Skills: Settings,
  Experience: Briefcase,
  Contact: Mail,
}

export default function Sidebar({ isMobileOpen, onMobileClose }) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const location = useLocation()

  return (
    <aside
      className={cn(
        'fixed z-20 left-0 top-0 bottom-0 border-r border-border bg-background/95 backdrop-blur-md transition-all duration-300',
        isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        'lg:relative lg:translate-x-0 lg:w-64 lg:border-r'
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center justify-between px-4 lg:px-6 border-b border-border bg-background backdrop-blur">
          <div className="flex items-center gap-3">
            <img
              src="/eduard/b9bcd401-94bc-4565-923c-2ef6c6cd4f2b.jpeg"
              alt="Eduard logo"
              className="h-9 w-9 rounded-lg object-cover shadow-lg ring-1 ring-border"
            />
            {!isCollapsed && (
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight text-foreground">Eduard</span>
                <span className="text-xs text-muted-foreground">Portfolio</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            {!isCollapsed && (
              <button
                onClick={() => setIsCollapsed(true)}
                className="rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors lg:hidden"
                aria-label="Collapse sidebar"
              >
                <X className="h-5 w-5" />
              </button>
            )}
            {isCollapsed && (
              <button
                onClick={() => setIsCollapsed(false)}
                className="rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Expand sidebar"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            const Icon = ICONS[item.name]
            const isActive = location.pathname === item.href
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={onMobileClose}
                className={cn(
                  'group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                )}
              >
                <Icon
                  className={cn(
                    'h-5 w-5 shrink-0 transition-colors',
                    isActive
                      ? 'text-primary-foreground'
                      : 'text-muted-foreground group-hover:text-accent-foreground'
                  )}
                />
                {!isCollapsed && (
                  <span
                    className={cn(
                      isActive
                        ? 'text-primary-foreground'
                        : 'text-foreground'
                    )}
                  >
                    {item.name}
                  </span>
                )}
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
