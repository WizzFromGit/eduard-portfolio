import { useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function ImageLightbox({ images = [], alt = 'Project screenshot', index = null, onClose, onNavigate }) {
  const isOpen = index !== null && index !== undefined

  const goTo = useCallback(
    (i) => {
      if (!images.length) return
      onNavigate((i + images.length) % images.length)
    },
    [images.length, onNavigate]
  )

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goTo(index + 1)
      if (e.key === 'ArrowLeft') goTo(index - 1)
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, index, goTo, onClose])

  return (
    <AnimatePresence>
      {isOpen && images[index] && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} fullscreen gallery`}
        >
          <motion.div
            initial={{ scale: 0.94, y: 12 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="relative flex max-h-full w-full max-w-6xl flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between text-white">
              <span className="text-sm font-medium">
                {index + 1} / {images.length}
              </span>
              <button
                onClick={onClose}
                aria-label="Close fullscreen gallery"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative flex min-h-[50vh] w-full items-center justify-center overflow-hidden rounded-xl bg-black/40 md:min-h-[70vh]">
              <img
                key={images[index]}
                src={images[index]}
                alt={`${alt} ${index + 1}`}
                className="max-h-[68vh] w-auto max-w-full rounded-lg object-contain md:max-h-[74vh]"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={() => goTo(index - 1)}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => goTo(index + 1)}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {images.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => onNavigate(i)}
                    aria-label={`Go to image ${i + 1}`}
                    className={`h-14 w-20 shrink-0 overflow-hidden rounded-md border-2 transition-all ${
                      i === index ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
