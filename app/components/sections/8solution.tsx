import UseCaseCard from "../reusable ui/UseCaseCard";

export default function Solutions() {
  const USE_CASES = [
    {
      id: "construction",
      title: "Construction",
      description:
        "With Dropbox for teams, you can store, access, preview, edit, and transfer CAD, BIM, PDF, and visual content files from anywhere.",
      link: "#",
    },
    {
      id: "media",
      title: "Media",
      description:
        "Create a flexible media workspace that connects your teams, content, and tools together.",
      link: "#",
    },
    {
      id: "technology",
      title: "Technology",
      description:
        "From product ideation to development, streamline technology workflows so you can focus on turning great ideas into products people love.",
      link: "#",
    },
    {
      id: "professional-services",
      title: "Professional services",
      description:
        "Make clients happier with easy collaboration, boosted productivity, and one organized place to get things done.",
      link: "#",
    },
    {
      id: "manufacturing",
      title: "Manufacturing",
      description:
        "Design and engineering teams easily collaborate, managing complex reviews and sharing large files seamlessly.",
      link: "#",
    },
    {
      id: "education",
      title: "Education",
      description:
        "Power student learning, faculty research, and staff operations on a secure cloud collaboration platform.",
      link: "#",
    },
  ];

  return (
    <section className="flex flex-col gap-12 px-5 py-16 sm:px-6 md:px-12 lg:px-24">
      <h2 className="text-center text-2xl sm:text-3xl md:text-5xl font-semibold">
        Solutions for every team
      </h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {USE_CASES.map((item) => (
          <UseCaseCard
            key={item.id}
            title={item.title}
            description={item.description}
            href={item.link}
          />
        ))}
      </div>
    </section>
  );
}
