"use client";

import { Archive, ArrowRight } from "lucide-react";
import Link from "next/link";
import LearnMoreButton from "../reusable ui/learnmorebutton";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Preview() {
  const sectionRef = useRef<HTMLElement>(null);
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
          scrub: 3,
        },
      });

      // 3️⃣ Paragraph + buttons – move up with lag
      gsap.from(contentRef.current?.children || [], {
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
      <a
        ref={badgeRef}
        className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-orange-800 px-3 py-2 text-sm text-white"
      >
        <Archive className="h-4 w-4" />
        Content management
      </a>

      <h1
        ref={titleRef}
        className="mt-4 text-center text-2xl sm:text-3xl font-semibold"
      >
        Preview your files before downloading
      </h1>

      <div ref={contentRef}>
        <p className="mt-4 max-w-2xl text-center text-sm sm:text-base md:mb-6">
          Stay organized and on track with smart organization, helpful
          suggestions, natural language search, and seamless integrations.
          Everything is easy to find and simple to manage within CloudBox cloud
          storage—so your team can stay focused on their work.
        </p>

        <div className="md:flex md:gap-6 justify-center md:items-center text-2xl">
          <div className="mt-4 flex justify-center">
            <LearnMoreButton />
          </div>

          <div className="flex justify-center items-center">
            <Link
              href="./signup"
              className="mt-6 inline-flex items-center gap-2 underline"
            >
              Get started free
              <ArrowRight className="w-4" />
            </Link>
          </div>

        </div>
      </div>

      <video
        ref={videoRef}
        className="mt-8 w-full max-w-4xl mx-auto rounded-2xl border border-gray-300 shadow-lg"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => ScrollTrigger.refresh()}
      />
    </section>
  );
}
