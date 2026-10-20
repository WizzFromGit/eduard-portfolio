import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function StatCard({
  title,
  value,
  delta,
  deltaLabel,
  Icon,
  variant = 'default',
}) {
  const isPositive = variant === 'positive'
  const badgeCls = cn(
    'rounded-lg p-2',
    isPositive
      ? 'bg-foreground text-background'
      : 'bg-accent text-accent-foreground'
  )
  const deltaCls = cn(
    'text-xs font-medium',
    isPositive ? 'text-foreground' : 'text-muted-foreground'
  )

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-xl border bg-card p-5 text-card-foreground shadow-sm"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <h2 className="mt-1 text-2xl font-bold">{value}</h2>
        </div>
        <div className={badgeCls}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
      {delta && (
        <p className={cn('mt-2 flex items-center gap-1', deltaCls)}>
          {isPositive && <span className="h-3 w-3">▲</span>}
          {delta} {deltaLabel}
        </p>
      )}
    </motion.div>
  )
}
