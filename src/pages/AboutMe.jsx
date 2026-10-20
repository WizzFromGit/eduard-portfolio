import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, GraduationCap, Code } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import PhotoCarousel from '@/components/widgets/PhotoCarousel'
import { EDUCATION } from '@/data/experience'

export default function AboutMe() {
  const bio =
    "Detail-oriented Software Engineer with 1,200 hours of internship experience at Kyocera Philippines. " +
    "Experienced in C# development, software testing and ticket management using Jira, and working in " +
    "both Linux and Windows systems. Developed various full-stack and mobile projects using React, " +
    "React Native, Laravel, Node.js, and PHP, showcasing adaptability across frontend, backend, and " +
    "cross-platform development."

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center gap-8">
        <div className="md:flex-1">
          <div className="relative rounded-2xl border bg-card p-8 md:p-12 shadow-sm overflow-hidden">
            <div className="absolute top-0 right-0 -mr-4 -mt-4 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative z-10 flex flex-col items-start gap-4"
            >
              <div className="flex items-center gap-3">
                <img
                  src="/eduard/b9bcd401-94bc-4565-923c-2ef6c6cd4f2b.jpeg"
                  alt="Eduard Jhon Sarmiento"
                  className="h-12 w-12 rounded-xl object-cover shadow-lg ring-1 ring-border"
                />
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Eduard Jhon Sarmiento</h2>
                  <p className="text-primary font-medium">Software Developer</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-lg">
                {bio}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" /> eduardjhonsarmiento24@gmail.com
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" /> 09932284599
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" /> Cebu City, Cebu
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="md:flex-1 space-y-4">
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
                  className="flex items-start gap-3 p-3 rounded-lg border border-border/50 hover:bg-accent transition-colors"
                >
                  <div className="shrink-0 rounded-full bg-secondary p-2 text-secondary-foreground">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-xs text-muted-foreground">{edu.school}</p>
                    <p className="text-xs text-primary font-medium">{edu.period}</p>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" /> Tech Interests
              </CardTitle>
              <CardDescription>Areas I enjoy building in.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {['Full-Stack Web', 'Mobile (React Native)', 'Backend (Laravel / Node)', 'Software Testing', 'C# / Windows & Linux'].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full border border-border bg-background text-xs text-foreground hover:bg-accent transition-colors"
                >
                  {t}
                </span>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      <PhotoCarousel />
    </div>
  )
}
