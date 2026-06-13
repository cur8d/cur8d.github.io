import { TemplateCard } from "@/components/TemplateCard";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "cur8d.dev",
    "description": "Opinionated production-ready templates for mobile, cloud, and web applications.",
    "url": "https://cur8d.dev",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "All",
  };

  return (
    <div className="flex flex-col gap-20 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 text-center">
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight lg:text-6xl text-muted-foreground">
          Build faster with <span className="text-primary">cur8d</span> templates
        </h1>
        <div className="mx-auto mb-10 text-xl text-muted-foreground">
          <p>
            Opinionated production-ready templates for mobile, cloud, and web developers
          </p>
        </div>
      </section>

      {/* Templates Section */}
      <section className="container mx-auto px-4">
        <h2 className="sr-only">Available Templates</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <TemplateCard
            title="cur8d.py"
            description="Python project template to get you started quickly with best practices"
            icon="py"
            url="https://cur8d.dev/python"
          />
          <TemplateCard
            title="cur8d.tsx"
            description="TypeScript web-application template powered by Next.js, Tailwind CSS, and HeroUI"
            icon="tsx"
            url="https://cur8d.dev/typescript"
          />
          <TemplateCard
            title="cur8d.aws"
            description="AWS Lambda templates in Python"
            icon="aws"
          />
        </div>
      </section>
    </div>
  );
}
