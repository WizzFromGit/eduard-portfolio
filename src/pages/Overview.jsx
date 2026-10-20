import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Briefcase, Code, Play, Settings } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StatCard from '@/components/widgets/StatCard'
import RecentActivity from '@/components/widgets/RecentActivity'
import QuickActions from '@/components/widgets/QuickActions'
import TechCarousel from '@/components/widgets/TechCarousel'
import { PROJECTS } from '@/data/projects'
import { TECH_STACK } from '@/data/tech'

function ProjectCard({ id, title, category, description, images = [], status, statusColor }) {
  return (
    <Link
      to={`/projects/${id}`}
      aria-label={`View details for ${title}`}
      className="block rounded-xl border bg-card text-card-foreground shadow-sm transition-colors hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <motion.div whileHover={{ y: -6 }} className="p-5">
      <div className="flex flex-col gap-3">
        {images.length > 0 ? (
          <div className="relative h-36 w-full rounded-lg overflow-hidden border border-border/50 bg-muted">
            <img
              src={images[0]}
              alt={`${title} screenshot`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            {images.length > 1 && (
              <span className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-0.5 text-[11px] font-medium text-white">
                {images.length} photos
              </span>
            )}
          </div>
        ) : null}
        <div className="flex items-center justify-between">
          <Badge variant="outline">{category}</Badge>
          <Badge variant={statusColor}>{status}</Badge>
        </div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary">
          View details <ArrowRight className="h-3 w-3" />
        </span>
      </div>
      </motion.div>
    </Link>
  )
}

export default function Overview() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Overview
          </h1>
          <p className="text-muted-foreground mt-1">
            Here&rsquo;s what&rsquo;s happening with my work.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link to="/projects">View all projects</Link>
          </Button>
        </div>
      </div>

      <TechCarousel items={TECH_STACK} />

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard title="Projects" value="3" delta="+" deltaLabel="projects" Icon={Code} />
        <StatCard
          title="Experience"
          value="2+ yrs"
          delta=""
          deltaLabel=""
          Icon={Briefcase}
        />
        <StatCard
          title="Internship Hours"
          value="1,200"
          delta="Kyocera"
          deltaLabel=""
          Icon={Settings}
        />
        <StatCard title="Skills" value="10+" delta="" deltaLabel="" Icon={Play} />
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-7">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest updates across your portfolio.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RecentActivity />
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-5">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Jump to any section.</CardDescription>
            </CardHeader>
            <CardContent>
              <QuickActions />
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-12">
          <Card>
            <CardHeader>
              <CardTitle>Featured Projects</CardTitle>
              <CardDescription>A selection of my work.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {PROJECTS.map((p) => (
                  <ProjectCard key={p.id} {...p} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
