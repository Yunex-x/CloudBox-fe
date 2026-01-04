"use client";

import { useEffect, useRef } from "react";
import TopicCard from "../reusable ui/TopicCard";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TopicsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  const TOPICS = [
    {
      id: "collaboration",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop",
      title: "Collaboration",
      description: "Learn how to collaborate effectively with your team.",
      href: "#",
    },
    {
      id: "security",
      image:
        "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1170&auto=format&fit=crop",
      title: "Security",
      description: "Learn how to keep your data secure.",
      href: "#",
    },
    {
      id: "productivity",
      image:
        "https://images.unsplash.com/photo-1507099985932-87a4520ed1d5?w=1000&auto=format&fit=crop&q=60",
      title: "Productivity",
      description: "Learn how to improve your productivity.",
      href: "#",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(
        cardsRef.current ? Array.from(cardsRef.current.children) : [],
        {
          opacity: 0,
          y: 80,
          ease: "power1.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: 3,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-5 py-12">
      <div
        ref={cardsRef}
        className="grid gap-6 sm:grid-cols-1 md:grid-cols-3"
      >
        {TOPICS.map((item) => (
          <TopicCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            href={item.href}
          />
        ))}
      </div>

      <Link
        href="#"
        className="mt-6 flex items-center justify-center gap-2 text-sm md:text-xl font-medium text-neutral-900 underline"
      >
        Explore all topics
      </Link>

      <p className="mt-6 text-center text-xs md:text-xl md:mt-12 text-neutral-600">
        Disclaimer: References to future products or features are for informational
        purposes only and do not represent a commitment to deliver. Purchasing
        decisions should rely solely on currently available functionality.
      </p>
    </section>
  );
}
