"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function TrustedBy() {
  const listRef = useRef<HTMLUListElement | null>(null);

  useGSAP(() => {
    if (!listRef.current) return;

    gsap.to(listRef.current, {
      xPercent: -50,
      duration: 30,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section className="overflow-hidden bg-zinc-800 px-5 py-12">
      <h1 className="mb-6 text-center text-white text-lg sm:text-xl lg:text-4xl lg:mb-12">
        Trusted by the biggest companies in the world
      </h1>

      <div className="overflow-hidden">
        <ul
          ref={listRef}
          className="flex whitespace-nowrap items-center gap-50 text-white text-lg lg:text-2xl"
        >
          {/* duplicate items for seamless loop */}
          <li>Brand 1</li>
          <li>Brand 2</li>
          <li>Brand 3</li>
          <li>Brand 4</li>
          <li>Brand 5</li>

          <li>Brand 1</li>
          <li>Brand 2</li>
          <li>Brand 3</li>
          <li>Brand 4</li>
          <li>Brand 5</li>
        </ul>
      </div>
    </section>
  );
}
