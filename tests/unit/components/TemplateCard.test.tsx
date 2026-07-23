import { render, screen } from "@testing-library/react";
import { TemplateCard } from "@/components/TemplateCard";
import { describe, it, expect } from "vitest";

describe("TemplateCard", () => {
  it("renders title, description, and docs link when provided", () => {
    render(
      <TemplateCard
        title="cur8d.tsx"
        description="Next.js starter"
        icon="tsx"
        docs="https://cur8d.dev/typescript"
        github="https://github.com/cur8d/cur8d.tsx"
      />,
    );

    expect(screen.getByText("cur8d.tsx")).toBeInTheDocument();
    expect(screen.getByText("Next.js starter")).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /View cur8d.tsx repository on GitHub/i,
      }),
    ).toHaveAttribute("href", "https://github.com/cur8d/cur8d.tsx");
    expect(
      screen.getByRole("link", { name: /Go to cur8d.tsx docs/i }),
    ).toHaveAttribute("href", "https://cur8d.dev/typescript");
  });

  it("renders 'Coming Soon' when neither docs nor url is provided", () => {
    render(
      <TemplateCard
        title="cur8d.kts"
        description="Kotlin Multiplatform"
        icon="kts"
      />,
    );

    expect(screen.getByText("Coming Soon")).toBeInTheDocument();
  });
});
