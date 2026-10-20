import { motion } from 'framer-motion'
import { Mail, Code, CheckCircle, Briefcase } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const ACTIVITY = [
  {
    id: '1',
    title: 'Deployed PNPh-System update',
    subtitle: 'Production deployment completed',
    time: '2h ago',
    icon: Code,
    type: 'success',
  },
  {
    id: '2',
    title: 'New message from Stefan Flores',
    subtitle: 'Reference check request',
    time: '5h ago',
    icon: Mail,
    type: 'info',
  },
  {
    id: '3',
    title: 'Children of Asia - SAFE app',
    subtitle: 'Marked project as complete',
    time: '1d ago',
    icon: CheckCircle,
    type: 'success',
  },
  {
    id: '4',
    title: 'RAFI - GSK app testing',
    subtitle: 'System testing & QA',
    time: '2d ago',
    icon: Briefcase,
    type: 'info',
  },
]

export default function RecentActivity() {
  return (
    <div className="rounded-xl border bg-card p-5 text-card-foreground shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-foreground">Recent Activity</h3>
        <Badge variant="outline">All</Badge>
      </div>
      <div className="space-y-3">
        {ACTIVITY.map((item) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.id}
              whileHover={{ x: 4 }}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition-colors"
            >
              <div className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center text-secondary-foreground">
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground truncate">{item.title}</p>
                <p className="text-xs text-muted-foreground truncate">
                  {item.subtitle}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">{item.time}</span>
                <div className="h-2 w-2 rounded-full bg-foreground/40" />
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
