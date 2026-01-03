import { ShieldCheck } from "lucide-react";
import LearnMoreButton from "../reusable ui/learnmorebutton";

export default function Feautures() {
  return (
    <section className="flex flex-col items-center bg-stone-50 px-5 py-10">
      <a className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-slate-800 px-3 py-2 text-sm text-white">
        <ShieldCheck className="w-4 h-4" />
        Permissions
      </a>

      <h1 className="mt-6 text-center text-2xl sm:text-3xl font-semibold">
        Protect your data with advanced permissions
      </h1>

      <p className="mt-4 max-w-2xl text-center text-sm sm:text-base">
        CloudBox helps teams quickly find files across all their apps while
        protecting sensitive information. With AI-powered search and unified
        access controls, everyone stays productive, connected, and secure.
      </p>

      <div className="mt-8">
        <LearnMoreButton />
      </div>

      <video
        className="mt-8 w-full max-w-4xl mx-auto rounded-2xl border border-gray-300 shadow-lg"
        src="/videos/features.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
}
