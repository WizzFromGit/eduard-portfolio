import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Layers, Smartphone, Code, ExternalLink, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { PROJECTS } from '@/data/projects'

const FILTERS = ['All', 'Mobile', 'Internal System', 'Web Application']

const ICON_MAP = { Code, Layers, Smartphone }

function ProjectCard({ id, title, category, description, images = [], status, statusColor }) {
  const Icon = ICON_MAP[category] || Code
  return (
    <Link
      to={`/projects/${id}`}
      aria-label={`View details for ${title}`}
      className="block rounded-xl border bg-card text-card-foreground shadow-sm transition-colors hover:border-primary/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <motion.div whileHover={{ y: -6 }} className="p-5">
      <div className="relative h-40 w-full rounded-lg bg-muted overflow-hidden mb-4 border border-border/50">
        {images.length > 0 ? (
          <img
            src={images[0]}
            alt={`${title} screenshot`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full bg-muted flex items-center justify-center">
            <Icon className="h-6 w-6 text-foreground" />
          </div>
        )}
        {images.length > 1 && (
          <span className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-0.5 text-[11px] font-medium text-white">
            {images.length} photos
          </span>
        )}
      </div>
      <div className="flex items-center justify-between gap-2 mb-3">
        <Badge variant="outline">{category}</Badge>
        <Badge variant={statusColor}>{status}</Badge>
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
        {description}
      </p>
      <Button variant="outline" size="sm" asChild>
        <span className="inline-flex cursor-pointer items-center">
          Details <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
        </span>
      </Button>
      </motion.div>
    </Link>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = PROJECTS.filter((p) => {
    const matchFilter =
      filter === 'All' || p.category === filter
    const matchSearch =
      search === '' ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    return matchFilter && matchSearch
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Projects
          </h1>
          <p className="text-muted-foreground mt-1">
            Selected projects and applications I&rsquo;ve built.
          </p>
        </div>
        <Button variant="outline" asChild>
          <a
            href="/pdf-resume/resume%20(1).pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-[300px] pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filter === f
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'border border-border bg-background text-muted-foreground hover:bg-accent'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {filtered.length === 0 ? (
          <div className="md:col-span-12 flex flex-col items-center justify-center py-12 text-center">
            <Layers className="h-10 w-10 text-muted-foreground mb-3 opacity-50" />
            <p className="text-muted-foreground">
              No projects match your filters.
            </p>
          </div>
        ) : (
          filtered.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))
        )}
      </div>
    </div>
  )
}
