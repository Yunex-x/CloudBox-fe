"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Users } from "lucide-react";
import Link from "next/link";
import LearnMoreButton from "../reusable ui/learnmorebutton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Sharing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLAnchorElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1️⃣ Badge – opacity only
      gsap.from(badgeRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: badgeRef.current,
          start: "top 85%",
          end: "top 65%",
          scrub: true,
        },
      });

      // 2️⃣ Title – opacity only
      gsap.from(titleRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          end: "top 65%",
          scrub: 1,
        },
      });

      // 3️⃣ Paragraph + buttons – move up with lag
      gsap.from(contentRef.current ? Array.from(contentRef.current.children) : [], {
        opacity: 0,
        y: 50,
        stagger: 1,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 90%",
          end: "top 45%",
          scrub: 1,
        },
      });

      // 4️⃣ Video – scale + fade
      gsap.from(videoRef.current, {
        opacity: 0,
        scale: 0.95,
        ease: "power3.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 85%",
          end: "top 50%",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center px-5 py-10"
    >
      {/* Badge */}
      <a
        ref={badgeRef}
        className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-red-600 px-3 py-2 text-sm text-white"
      >
        <Users className="h-4 w-4" />
        Collaboration
      </a>

      {/* Title */}
      <h1
        ref={titleRef}
        className="mt-4 text-center text-2xl font-semibold sm:text-3xl"
      >
        Keep work flowing with instant sharing
      </h1>

      {/* Paragraph + Buttons */}
      <div ref={contentRef} className="flex flex-col items-center">
        <p className="mt-4 max-w-2xl text-center text-sm sm:text-base md:mb-6">
          Secure links, real-time syncing, and fast large-file transfers keep
          your team and partners connected for seamless collaboration.
        </p>

        <div className="md:flex md:items-center md:gap-6 text-2xl">
          <div className="mt-4">
            <LearnMoreButton />
          </div>

          <Link
            href="./signup"
            className="mt-6 inline-flex items-center gap-2 underline"
          >
            Get started free
            <ArrowRight className="w-4" />
          </Link>
        </div>
      </div>

      {/* Video */}
      <video
        ref={videoRef}
        className="mx-auto mt-8 w-full max-w-4xl rounded-2xl border border-gray-300 shadow-lg"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
}
