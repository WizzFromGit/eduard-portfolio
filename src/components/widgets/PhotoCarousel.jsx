import { motion } from 'framer-motion'

const PHOTOS = [
  '/photo-me/me1.jpeg',
  '/photo-me/284ceb0f-e33c-4f22-bc54-51decd538988.jpeg',
  '/photo-me/5caf9b7d-337f-4b1a-95b9-95c1b579503f.jpeg',
  '/photo-me/d019ee90-c0dd-43a6-b815-60942f462272.jpeg',
]

export default function PhotoCarousel({ speed = 30 }) {
  const doubled = [...PHOTOS, ...PHOTOS]

  return (
    <div className="relative w-full max-w-full overflow-hidden rounded-2xl border bg-card p-4 shadow-sm sm:p-6">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">
          Gallery
        </h3>
        <span className="text-xs text-muted-foreground">Moments & milestones</span>
      </div>
      <div className="relative overflow-hidden rounded-xl [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '-50%' }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex w-max gap-5 md:gap-6"
        >
          {doubled.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="h-72 w-56 shrink-0 overflow-hidden rounded-2xl border border-border/60 bg-muted sm:h-80 sm:w-64 md:h-96 md:w-72 lg:h-[26rem] lg:w-80"
            >
              <img
                src={src}
                alt={`Eduard photo ${(i % PHOTOS.length) + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
