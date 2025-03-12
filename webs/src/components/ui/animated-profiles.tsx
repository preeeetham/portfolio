"use client"

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"
import { useEffect, useState } from "react"

type Profiles = {
  src: string
}

export const AnimatedProfiles = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Profiles[]
  autoplay?: boolean
}) => {
  const [active, setActive] = useState(0)

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }

  const isActive = (index: number) => {
    return index === active
  }

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000)
      return () => clearInterval(interval)
    }
  }, [autoplay])

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10
  }

  return (
    <div className="max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-20 text-center">
      {/* Image Section */}
      <div className="relative h-80 w-full">
        <AnimatePresence>
          {testimonials.map((testimonial, index) => (
            <motion.div
            key={testimonial.src}
            initial={{
              opacity: 0,
              scale: 0.9,
              z: -100,
              rotate: randomRotateY(),
            }}
            animate={{
              opacity: isActive(index) ? 1 : 0.7,
              scale: isActive(index) ? 1 : 0.95,
              z: isActive(index) ? 0 : -100,
              rotate: isActive(index) ? 0 : randomRotateY(),
              zIndex: isActive(index) ? 999 : testimonials.length + 2 - index,
              y: isActive(index) ? [0, -80, 0] : 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              z: 100,
              rotate: randomRotateY(),
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="absolute inset-0 origin-bottom"
          >
           
              <Image
                src={testimonial.src}
                alt="Profile Image"
                width={200}
                height={200}
                draggable={false}
                className="h-full w-full rounded-3xl object-cover object-center"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons under Image */}
      <div className="flex gap-4 justify-center pt-6">
        <button
          onClick={handlePrev}
          className="h-9 w-9 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center hover:scale-110 transition-all"
        >
          <IconArrowLeft className="h-6 w-6 text-black dark:text-neutral-400" />
        </button>
        <button
          onClick={handleNext}
          className="h-9 w-9 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center hover:scale-110 transition-all"
        >
          <IconArrowRight className="h-6 w-6 text-black dark:text-neutral-400" />
        </button>
      </div>
    </div>
  )
}
