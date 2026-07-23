"use client";

import { useState } from "react";
import { Button, Tooltip } from "@heroui/react";
import { Copy, Check } from "lucide-react";

export function CodeBlockCopyButton({
  code,
  className,
}: {
  code: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <Tooltip>
      <Tooltip.Trigger>
        <Button
          isIconOnly
          size="sm"
          variant="ghost"
          className={`code-block__copy-button ${className || ""}`}
          onClick={copyToClipboard}
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="text-success h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </Tooltip.Trigger>
      <Tooltip.Content>{copied ? "Copied!" : "Copy code"}</Tooltip.Content>
    </Tooltip>
  );
}
