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
      <Tooltip.Trigger
        render={(triggerProps) => {
          const buttonProps = triggerProps as unknown as React.ComponentProps<
            typeof Button
          >;
          return (
            <Button
              {...buttonProps}
              isIconOnly
              size="sm"
              variant="ghost"
              className={`code-block__copy-button ${className || ""}`}
              onClick={(e) => {
                buttonProps.onClick?.(e);
                copyToClipboard();
              }}
              aria-label="Copy to clipboard"
            >
              {copied ? (
                <Check className="text-success h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          );
        }}
      />
      <Tooltip.Content>
        {copied ? "Copied!" : "Copy to clipboard"}
      </Tooltip.Content>
    </Tooltip>
  );
}
