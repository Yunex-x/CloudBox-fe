import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-stone-50 px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center">
        {/* LEFT: Text */}
        <div className="flex flex-col items-start md:w-1/2">
          <h1 className="text-2xl font-semibold sm:text-3xl">
            Find your files anywhere
          </h1>

          <p className="mt-4 max-w-xl text-sm sm:text-base">
            Access your files from any device, anytime, anywhere with our secure
            cloud storage solution.
          </p>

          <Link
            href="./signup"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-700 px-3 py-2 text-white hover:bg-blue-900"
          >
            whats new with us
            <ArrowRight className="w-4" />
          </Link>

          <Link
            href="./signup"
            className="mt-4 inline-flex items-center gap-2 underline"
          >
            Try cloudbox free
            <ArrowRight className="w-4" />
          </Link>
        </div>

        {/* RIGHT: Video */}
        <div className="md:w-1/2">
          <video
            className="w-full rounded-2xl border border-gray-300 shadow-lg"
            src="/videos/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </section>
  );
}
