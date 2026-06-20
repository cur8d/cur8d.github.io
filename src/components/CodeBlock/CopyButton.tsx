"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import { Copy, Check } from "lucide-react";

export function CodeBlockCopyButton({ code, className }: { code: string; className?: string }) {
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
    <Button
      isIconOnly
      size="sm"
      variant="light"
      className={`code-block__copy-button ${className || ""}`}
      onClick={copyToClipboard}
      aria-label="Copy code"
    >
      {copied ? <Check className="text-success h-4 w-4" /> : <Copy className="h-4 w-4" />}
    </Button>
  );
}
