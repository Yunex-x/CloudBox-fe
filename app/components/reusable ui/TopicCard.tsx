import Image from "next/image"
import Link from "next/link"

type TopicCardProps = {
  image: string
  title: string
  description: string
  href: string
}

export default function TopicCard({
  image,
  title,
  description,
  href,
}: TopicCardProps) {
  return (
    <div className="max-w-sm overflow-hidden rounded-2xl bg-neutral-200">
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-xs md:text-xl font-medium text-neutral-600">
        </p>

        <h3 className="mt-2 text-base md:text-xl font-semibold text-neutral-900">
          {title}
        </h3>

        <p className="mt-2 text-sm md:text-xl text-neutral-700">
          {description}
        </p>

        <Link
          href={href}
          className="mt-4 inline-block text-sm font-medium text-neutral-900 underline"
        >
          Read article
        </Link>
      </div>
    </div>
  )
}
