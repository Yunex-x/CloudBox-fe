import Link from "next/link"

type UseCaseCardProps = {
  title: string
  description: string
  href: string
}

export default function UseCaseCard({
  title,
  description,
  href,
}: UseCaseCardProps) {
  
  return (
    <div className="rounded-2xl bg-neutral-100 p-8">
      <h3 className="text- md:text-2xl font-semibold text-neutral-900">
        {title}
      </h3>

      <p className="mt-3 text-sm md:text-xl text-neutral-600">
        {description}
      </p>

      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-2 text-sm md:text-xl font-medium text-neutral-900 underline"
      >
        Learn more
        <span aria-hidden>→</span>
      </Link>
    </div>
  )
}
