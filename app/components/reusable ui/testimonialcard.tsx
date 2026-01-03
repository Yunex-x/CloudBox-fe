"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

type Props = {
  item: {
    title: string
    text: string
    image: string
    link: string
  }
}

export default function TestimonialCard({ item }: Props) {
  return (
    <motion.div
      className="min-w-[320px] rounded-2xl bg-zinc-900 p-6 text-white"
      whileTap={{ scale: 0.97 }}
    >
      <div className="relative h-48 overflow-hidden rounded-xl">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>

      <p className="mt-4 text-sm text-pink-500">Testimonial</p>

      <h3 className="mt-2 text-lg font-semibold">
        “{item.title}”
      </h3>

      <p className="mt-2 text-sm text-zinc-400">
        {item.text}
      </p>

      <Link
        href={item.link}
        className="mt-6 inline-block text-sm font-medium underline"
      >
        Watch testimonial
      </Link>
    </motion.div>
  )
}
