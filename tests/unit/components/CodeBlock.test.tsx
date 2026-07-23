import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { CodeBlock } from "@/components/CodeBlock";
import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock navigator.clipboard
Object.assign(navigator, {
  clipboard: {
    writeText: vi.fn().mockImplementation(() => Promise.resolve()),
  },
});

describe("CodeBlock", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the code correctly", () => {
    const code = "npx create-cur8d";
    render(
      <CodeBlock>
        <CodeBlock.Code code={code} />
      </CodeBlock>,
    );

    expect(screen.getByText(code)).toBeInTheDocument();
  });

  it("renders prompt and cursor when requested", () => {
    const code = "npx create-cur8d";
    const { container } = render(
      <CodeBlock>
        <CodeBlock.Code code={code} showPrompt showCursor />
      </CodeBlock>,
    );

    expect(screen.getByText("$")).toBeInTheDocument();
    expect(screen.getByText(code)).toBeInTheDocument();
    expect(container.querySelector(".code-block__cursor")).toBeInTheDocument();
  });

  it("renders CodeBlock.Header if used", () => {
    render(
      <CodeBlock>
        <CodeBlock.Header>Header Title</CodeBlock.Header>
      </CodeBlock>,
    );

    expect(screen.getByText("Header Title")).toBeInTheDocument();
  });

  it("copies code to clipboard when copy button is clicked", async () => {
    const code = "npx create-cur8d";
    render(
      <CodeBlock>
        <CodeBlock.Code code={code} showPrompt showCursor />
        <CodeBlock.CopyButton code={code} />
      </CodeBlock>,
    );

    const copyButton = screen.getByLabelText("Copy to clipboard");
    fireEvent.click(copyButton);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(code);

    // Check if it changes to check icon (success)
    await waitFor(() => {
      expect(
        screen
          .queryByLabelText("Copy to clipboard")
          ?.querySelector(".text-success"),
      ).toBeInTheDocument();
    });
  });
});
