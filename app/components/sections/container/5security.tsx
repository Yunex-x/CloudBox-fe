import { ArrowRight, LockKeyhole } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function security() {
  return (
    <section className="flex flex-col items-center bg-zinc-800 md:bg-transparent md:rounded-xl px-5 py-10 text-white">
      <LockKeyhole className="mt-8 h-10 w-10" />

      <h1 className="mt-4 text-center text-2xl sm:text-3xl font-semibold">
        Security is never an afterthought.
      </h1>

      <p className="mt-4 max-w-2xl text-center text-sm sm:text-base">
        From industry-leading encryption and tamper-proof documents to version
        history and recovery, Dropbox keeps your intellectual property safe and
        never sells your data.
      </p>

      <Link
        href="./signup"
        className="mt-6 inline-flex items-center gap-2 rounded-lg border-2 px-4 py-2"
      >
        Get started free
        <ArrowRight className="w-4" />
      </Link>

      <Link
        href="./signup"
        className="mt-4 inline-flex items-center gap-2 underline"
      >
        Learn more
        <ArrowRight className="w-4" />
      </Link>

      <Image
        className="mt-6 rounded-2xl"
        src="/images/file.avif"
        alt="preview"
        width={600}
        height={400}
      />
    </section>
  );
}
