import { Archive, ArrowRight } from "lucide-react";
import Link from "next/link";
import LearnMoreButton from "../reusable ui/learnmorebutton";

export default function Preview() {
  return (
    <section className="flex flex-col items-center px-5 py-10">
      <a className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-orange-800 px-3 py-2 text-sm text-white">
        <Archive className="w-4 h-4" />
        Content management
      </a>

      <h1 className="mt-4 text-center text-2xl sm:text-3xl font-semibold">
        Preview your files before downloading
      </h1>

      <p className="mt-4 max-w-2xl text-center text-sm sm:text-base md:mb-6">
        Stay organized and on track with smart organization, helpful suggestions,
        natural language search, and seamless integrations. Everything is easy to
        find and simple to manage within CloudBox cloud storage—so your team can
        stay focused on their work.
      </p>
<div className="md:flex md:gap-6  md:items-center text-2xl">

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

      <video
        className="mt-8 w-full max-w-4xl mx-auto rounded-2xl border border-gray-300 shadow-lg"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
}
