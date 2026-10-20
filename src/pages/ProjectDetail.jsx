import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Camera } from 'lucide-react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import ImageCarousel from '@/components/widgets/ImageCarousel'
import ImageLightbox from '@/components/widgets/ImageLightbox'
import TechCarousel from '@/components/widgets/TechCarousel'
import { PROJECTS } from '@/data/projects'
import { TECH_STACK } from '@/data/tech'

export default function ProjectDetail() {
  const { id } = useParams()
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const index = PROJECTS.findIndex((p) => p.id === id)
  if (index === -1) return <Navigate to="/projects" replace />

  const project = PROJECTS[index]
  const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length]
  const next = PROJECTS[(index + 1) % PROJECTS.length]

  const techItems = project.tech
    .map((name) => TECH_STACK.find((t) => t.name === name))
    .filter(Boolean)

  return (
    <div className="space-y-6">
      <Link
        to="/projects"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Projects
      </Link>

      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline">{project.category}</Badge>
          <Badge variant={project.statusColor}>{project.status}</Badge>
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <Camera className="h-3.5 w-3.5" />
            {project.images.length} screenshot{project.images.length === 1 ? '' : 's'}
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {project.title}
        </h1>
        <p className="max-w-2xl text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ImageCarousel
          images={project.images}
          alt={project.title}
          onExpand={(i) => setLightboxIndex(i)}
        />
      </motion.div>

      {techItems.length > 0 && (
        <div className="rounded-xl border bg-card p-5 text-card-foreground shadow-sm">
          <TechCarousel items={techItems} speed={14} />
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
        <Button variant="outline" asChild>
          <Link to={`/projects/${prev.id}`}>
            <ArrowLeft className="h-4 w-4 mr-2" /> {prev.title}
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to={`/projects/${next.id}`}>
            {next.title} <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>

      <ImageLightbox
        images={project.images}
        alt={project.title}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  )
}
