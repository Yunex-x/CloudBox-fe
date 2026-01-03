"use client";

import { motion } from "framer-motion";
import TestimonialCard from "../../reusable ui/testimonialcard";
const TESTIMONIALS = [
  {
    id: 1,
    title: "The security of knowing our information is safe.",
    text:
      "Customer Brian Chandler reveals how his team uses Dropbox to organize and share files securely.",
    image: "/testimonials/1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Seriously impressive security features",
    text:
      "Tech influencer Justin Tse discusses why he trusts Dropbox to keep his content safe.",
    image: "/testimonials/2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "cloudbox is the backbone of our business",
    text:
      "Customer Brian Chandler reveals how his team uses cloudbox to organize and share files securely.",
    image: "/testimonials/3.jpg",
    link: "#",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="overflow-hidden md:bg-transparent bg-zinc-800 py-16 sm:py-20">
      <motion.div
        className="flex gap-6 px-5  sm:px-6 cursor-grab"
        drag="x"
        dragConstraints={{ left: -400, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        {TESTIMONIALS.map((item) => (
          <TestimonialCard key={item.id} item={item} />
        ))}
      </motion.div>
    </section>
  );
}
