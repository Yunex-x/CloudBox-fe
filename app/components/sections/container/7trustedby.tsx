"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function TrustedBy() {
  const listRef = useRef<HTMLUListElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      listRef.current,
      { xPercent: -100 },
      {
        xPercent: 100,
        duration: 30,
        ease: "none",
        repeat: -1,
      }
    );
  }, []);

  return (
    <section className="overflow-hidden flex flex-col items-center justify-center bg-zinc-800 px-5 py-12">
      <h1 className="mb-6 text-center text-white text-lg lg:text-4xl animate-pulse sm:text-xl lg:mb-12">
        Trusted by the biggest companies in the world
      </h1>

      <ul
 ref={listRef}
        className="flex whitespace-nowrap items-center gap-8 lg:gap-75 text-white text-lg lg:text-2xl"
      >
        <li>Brand 1</li>
        <li>Brand 2</li>
        <li>Brand 3</li>
        <li>Brand 4</li>
        <li>Brand 5</li>
      </ul>
    </section>
  );
}
