import { Menu, Bell, MessageSquare } from 'lucide-react'

export default function TopNav({ onMenuToggle }) {
  return (
    <header className="sticky top-0 z-20 flex shrink-0 items-center gap-2 px-4 lg:px-8 border-b border-border bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <button
        onClick={onMenuToggle}
        className="rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors lg:hidden"
        aria-label="Toggle navigation"
      >
        <Menu className="h-5 w-5" />
      </button>
      <div className="flex-1 flex items-center justify-end gap-3">
        <div className="flex items-center gap-2">
          <button
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground hover:bg-accent transition-colors"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
          </button>
          <button
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground hover:bg-accent transition-colors"
            aria-label="Messages"
          >
            <MessageSquare className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2 pl-2 border-l border-border">
            <img
              src="/eduard/b9bcd401-94bc-4565-923c-2ef6c6cd4f2b.jpeg"
              alt="Eduard J."
              className="h-8 w-8 rounded-full object-cover shadow-lg ring-1 ring-border"
            />
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-sm font-medium text-foreground">Eduard J.</span>
              <span className="text-xs text-muted-foreground">Software Developer</span>
            </div>
            <div className="h-2 w-2 rounded-full bg-foreground" />
          </div>
        </div>
      </div>
    </header>
  )
}
