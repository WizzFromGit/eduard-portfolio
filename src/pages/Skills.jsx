import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import TechCarousel from '@/components/widgets/TechCarousel'
import TechOrbit from '@/components/widgets/TechOrbit'
import { TECH_STACK } from '@/data/tech'
import {
  SOFT_SKILLS,
  TOOLS,
  CERTIFICATES,
} from '@/data/skills'

export default function Skills() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Skills
          </h1>
          <p className="text-muted-foreground mt-1">
            Technical tools and capabilities.
          </p>
        </div>
      </div>

      <TechCarousel items={TECH_STACK} />

      <div className="grid gap-6 md:grid-cols-12 items-stretch">
        <div className="md:col-span-7 flex">
          <Card className="flex min-h-[540px] w-full flex-col overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle>Technical Skills</CardTitle>
              <CardDescription>
                Hover any logo to see the name.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 items-center justify-center py-2">
              <TechOrbit items={TECH_STACK} />
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-5 flex flex-col gap-6">
          <Card className="w-full flex flex-col">
            <CardHeader className="pb-3">
              <CardTitle>Soft Skills</CardTitle>
              <CardDescription>Interpersonal strengths.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap content-start gap-2">
              {SOFT_SKILLS.map((s) => (
                <Badge key={s} variant="outline">
                  {s}
                </Badge>
              ))}
            </CardContent>
          </Card>
          <Card className="w-full flex flex-col">
            <CardHeader className="pb-3">
              <CardTitle>Tools</CardTitle>
              <CardDescription>Development environments.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap content-start gap-2">
              {TOOLS.map((t) => (
                <Badge key={t} variant="secondary">
                  {t}
                </Badge>
              ))}
            </CardContent>
          </Card>
          <Card className="w-full flex flex-col">
            <CardHeader className="pb-3">
              <CardTitle>Certificates</CardTitle>
              <CardDescription>
                Completed courses and events.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap content-start gap-2">
              {CERTIFICATES.map((c) => (
                <Badge key={c} variant="outline">
                  {c}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
