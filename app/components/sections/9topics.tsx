import TopicCard from "../reusable ui/TopicCard";
import Link from "next/link";

export default function TopicsSection() {
  const TOPICS = [
    {
      id: "collaboration",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Collaboration",
      description: "Learn how to collaborate effectively with your team.",
      href: "#",
    },
    {
      id: "security",
      image:
        "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Security",
      description: "Learn how to keep your data secure.",
      href: "#",
    },
    {
      id: "productivity",
      image:
        "https://images.unsplash.com/photo-1507099985932-87a4520ed1d5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdGl2aXR5fGVufDB8fDB8fHwy",
      title: "Productivity",
      description: "Learn how to improve your productivity.",
      href: "#",
    },
  ];

  return (
    <section className="px-5 py-12">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
        {TOPICS.map((item) => (
          <TopicCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            href={item.href}
          />
        ))}
      </div>

      <Link
        href="#"
        className="mt-6 flex items-center justify-center gap-2 text-sm md:text-xl font-medium text-neutral-900 underline"
      >
        Explore all topics
      </Link>

      <p className="mt-6 text-center text-xs md:text-xl md:mt-12 text-neutral-600">
        Disclaimer: References to future products or features are for informational
        purposes only and do not represent a commitment to deliver. Purchasing
        decisions should rely solely on currently available functionality.
      </p>
    </section>
  );
}
