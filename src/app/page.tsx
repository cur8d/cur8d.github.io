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
          Build faster with <span className="text-primary">cur8d.dev</span>
        </h1>
        <div className="mx-auto mb-10 max-w-2xl text-xl text-muted-foreground">
          <p>
            Opinionated production-ready templates for mobile, cloud, and web developers.
          </p>
        </div>
      </section >

      {/* Templates Section */}
      < section className="container mx-auto px-4" >
        <div className="grid gap-8 md:grid-cols-3">
          <TemplateCard
            title="cur8d.py"
            description="Production-ready Fully-loaded Python Project Template"
            icon="cur8d.py.png"
            url="https://cur8d.dev/python"
          />
          <TemplateCard
            title="cur8d.tsx"
            description="Production-ready TypeScript Web-Application Template with Next.js, Tailwind CSS, and HeroUI"
            icon="cur8d.tsx.png"
            url="https://cur8d.dev/typescript"
          />
          <TemplateCard
            title="cur8d.lambda"
            description="Production-ready AWS Lambda Templates in Python"
            icon="cur8d.lambda.png"
          />
        </div>
      </section >
    </div >
  );
}
