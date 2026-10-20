import { motion } from 'framer-motion'
import {
  Code,
  Code2,
  FileCode,
  Layers,
  Smartphone,
  Server,
  Database,
  GitBranch,
  Layout,
  Rocket,
  Terminal,
  ShieldCheck,
} from 'lucide-react'

const ICON_MAP = {
  Code,
  Code2,
  FileCode,
  Layers,
  Smartphone,
  Server,
  Database,
  GitBranch,
  Layout,
  Rocket,
  Terminal,
  ShieldCheck,
}

export default function TechCarousel({ items, speed = 22 }) {
  const doubled = [...items, ...items]

  return (
    <section className="w-full overflow-hidden border-b border-border bg-background py-6 md:py-8">
      <div className="flex w-full items-end justify-between gap-3 mb-4">
        <h2 className="text-sm font-semibold tracking-wider text-foreground uppercase">
          Tech Stack
        </h2>
        <div className="h-px w-1/3 bg-border self-stretch hidden md:block" />
      </div>
      <div className="relative w-full overflow-hidden">
        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '-50%' }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex flex-nowrap items-center gap-8 md:gap-12 w-max"
        >
          {doubled.map((item, i) => {
            const Icon = ICON_MAP[item.icon] || Code
            return (
              <div
                key={`${item.name}-${i}`}
                className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity group cursor-default shrink-0"
              >
                <div className="flex items-center justify-center rounded-lg bg-secondary p-2.5 md:p-3 group-hover:bg-accent transition-colors">
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-[10px] md:text-[11px] font-medium text-muted-foreground group-hover:text-foreground leading-none tracking-tight whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
