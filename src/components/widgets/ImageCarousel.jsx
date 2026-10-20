import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react'

export default function ImageCarousel({ images = [], alt = 'Project screenshot', onExpand }) {
  const [current, setCurrent] = useState(0)

  if (!images.length) return null

  const next = () => setCurrent((c) => (c + 1) % images.length)
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)

  return (
    <div className="w-full rounded-xl border border-border bg-card overflow-hidden shadow-sm">
      <div className="relative w-full aspect-[16/10] bg-muted overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={images[current]}
            src={images[current]}
            alt={`${alt} ${current + 1}`}
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -48 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        <div className="absolute top-3 right-3 flex items-center gap-2">
          <span className="rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white">
            {current + 1} / {images.length}
          </span>
          {onExpand && (
            <button
              onClick={() => onExpand(current)}
              aria-label="Open fullscreen gallery"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
            >
              <Expand className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {images.length > 1 && (
        <div className="flex items-center justify-center gap-1.5 px-4 py-3">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setCurrent(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === current ? 'bg-primary w-8' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 w-4'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

