import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const INFO = [
  {
    icon: Mail,
    title: 'Email',
    text: 'eduardjhonsarmiento24@gmail.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    text: '09932284599',
  },
  {
    icon: MapPin,
    title: 'Location',
    text: 'Cebu City, Cebu, Philippines',
  },
]

export default function Contact() {
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSent(true)
    }, 1200)
  }

  if (sent) {
    return (
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Contact
            </h1>
            <p className="text-muted-foreground mt-1">Get in touch.</p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-xl border bg-card p-8 md:p-12 shadow-sm text-center"
        >
          <div className="h-14 w-14 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 text-foreground">
            <Send className="h-7 w-7" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Message sent!</h2>
          <p className="text-muted-foreground mt-2">
            Thanks for reaching out. I&rsquo;ll get back to you shortly.
          </p>
          <Button
            onClick={() => {
              setSent(false)
              setForm({ name: '', email: '', message: '' })
            }}
          >
            Send another
          </Button>
        </motion.div>
        <InfoPanel />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Contact
          </h1>
          <p className="text-muted-foreground mt-1">
            Let&rsquo;s build something great together.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-7">
          <Card className="overflow-hidden">
            <CardContent className="p-0 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 md:grid-cols-2">
                  {renderField('Full Name', 'Eduard Jhon Sarmiento', 'name')}
                  {renderField('Email', 'email', 'you@example.com', 'email', form.email)}
                </div>
                {renderField('Message', 'textarea', 'Tell me about your project...', 'message', form.message, 5)}
                <Button type="submit" disabled={submitting} className="w-full">
                  {submitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-5">
          <InfoPanel />
        </div>
      </div>
    </div>
  )
}

function renderField(label, typeOrAs, placeholder, name, value, rows) {
  const isTextarea = typeOrAs === 'textarea'
  return (
    <div key={name} className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      {isTextarea ? (
        <textarea
          id={name}
          placeholder={placeholder}
          defaultValue={value || ''}
          rows={rows}
          className="flex w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      ) : (
        <input
          id={name}
          type={typeOrAs}
          placeholder={placeholder}
          defaultValue={value || ''}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      )}
    </div>
  )
}

function InfoPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
        <CardDescription>Reach me through any channel below.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {INFO.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.title} className="flex items-start gap-3">
              <div className="shrink-0 rounded-lg bg-accent p-2 text-accent-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            </div>
          )
        })}
        <Separator className="my-4" />
        <div className="flex items-center gap-3 text-sm">
          <span className="font-medium text-foreground">Available for:</span>
          <div className="flex flex-wrap gap-1.5">
            <Badge variant="outline">Freelance</Badge>
            <Badge variant="outline">Full-time</Badge>
            <Badge variant="outline">Contract</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
