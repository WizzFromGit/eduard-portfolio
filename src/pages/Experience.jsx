import { motion } from 'framer-motion'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Building2, GraduationCap } from 'lucide-react'
import { EXPERIENCE, EDUCATION } from '@/data/experience'

export default function Experience() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Experience
          </h1>
          <p className="text-muted-foreground mt-1">
            Work history and education.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-8">
          <Card>
            <CardHeader>
              <CardTitle>Professional Experience</CardTitle>
              <CardDescription>Roles and responsibilities.</CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-8 pl-4 md:pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
              {EXPERIENCE.map((exp) => (
                <motion.div
                  key={exp.id}
                  whileHover={{ x: 4 }}
                  className="relative pl-8 pb-8 last:pb-0"
                >
                  <div className="absolute left-0 top-3 h-3 w-3 rounded-full border-2 border-primary bg-background" />
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-1">
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-foreground">
                        {exp.role}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs text-primary font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    {exp.type} &middot; {exp.location}
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                    {exp.description.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" /> Education
              </CardTitle>
              <CardDescription>Academic background.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {EDUCATION.map((edu) => (
                <motion.div
                  key={edu.degree}
                  whileHover={{ x: 4 }}
                  className="p-3 rounded-lg border border-border/50 hover:bg-accent transition-colors"
                >
                  <h4 className="text-sm font-semibold text-foreground">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-muted-foreground">{edu.school}</p>
                  <p className="text-xs text-primary font-medium">
                    {edu.period}
                  </p>
                </motion.div>
              ))}
              <div className="pt-4 border-t border-border/50 flex items-center gap-2 text-xs text-muted-foreground">
                <Building2 className="h-4 w-4" />
                Kyocera Philippines &middot; 1,200 internship hours
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
