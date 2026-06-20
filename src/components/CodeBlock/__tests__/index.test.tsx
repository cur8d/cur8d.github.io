import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { CodeBlock } from "../index";
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
      </CodeBlock>
    );

    expect(screen.getByText(code)).toBeInTheDocument();
  });

  it("copies code to clipboard when copy button is clicked", async () => {
    const code = "npx create-cur8d";
    render(
      <CodeBlock>
        <CodeBlock.Header>
          <CodeBlock.CopyButton code={code} />
        </CodeBlock.Header>
        <CodeBlock.Code code={code} />
      </CodeBlock>
    );

    const copyButton = screen.getByLabelText("Copy code");
    fireEvent.click(copyButton);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(code);

    // Check if it changes to check icon (success)
    await waitFor(() => {
        expect(screen.queryByLabelText("Copy code")?.querySelector(".text-success")).toBeInTheDocument();
    });
  });
});
