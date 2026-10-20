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

function OrbitRing({ items, size, duration, reverse = false, iconBox = 'h-11 w-11' }) {
  return (
    <motion.div
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
      className="absolute inset-0 m-auto rounded-full"
      style={{ width: size, height: size }}
    >
      {items.map((item, i) => {
        const angle = (360 / items.length) * i
        const Icon = ICON_MAP[item.icon] || Code
        return (
          <div
            key={`${item.name}-${i}`}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `rotate(${angle}deg) translate(${size / 2}px) rotate(${-angle}deg)`,
            }}
          >
            <motion.div
              animate={{ rotate: reverse ? 360 : -360 }}
              transition={{ duration, repeat: Infinity, ease: 'linear' }}
              title={item.name}
              className={`group relative flex -translate-x-1/2 -translate-y-1/2 ${iconBox} items-center justify-center rounded-full border border-border bg-card shadow-sm transition-colors hover:bg-foreground hover:text-background hover:border-foreground cursor-default text-foreground`}
            >
              <Icon className="h-5 w-5" />
              <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-[10px] font-medium text-background opacity-0 transition-opacity group-hover:opacity-100">
                {item.name}
              </span>
            </motion.div>
          </div>
        )
      })}
    </motion.div>
  )
}

export default function TechOrbit({ items }) {
  const outer = items.slice(0, 8)
  const inner = items.slice(8).concat(items.slice(0, Math.max(0, 5 - (items.length - 8))))

  return (
    <div className="relative mx-auto flex h-[300px] w-full max-w-[360px] items-center justify-center overflow-visible md:h-[320px]">
      {/* dashed guide rings */}
      <div className="absolute rounded-full border border-dashed border-border" style={{ width: 280, height: 280 }} />
      <div className="absolute rounded-full border border-dashed border-border" style={{ width: 168, height: 168 }} />

      {/* center badge */}
      <div className="z-10 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-foreground text-background shadow-lg">
        <Code2 className="h-6 w-6" />
        <span className="mt-1 text-[10px] font-semibold tracking-wide">STACK</span>
      </div>

      <OrbitRing items={outer} size={280} duration={36} iconBox="h-11 w-11" />
      <OrbitRing items={inner} size={168} duration={24} reverse iconBox="h-10 w-10" />
    </div>
  )
}
