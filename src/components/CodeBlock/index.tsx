import React from "react";
import { CodeBlockCopyButton } from "./CopyButton";

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

function CodeBlockRoot({ children, className }: CodeBlockProps) {
  return (
    <div className={`code-block ${className || ""}`}>
      {children}
    </div>
  );
}

interface CodeBlockHeaderProps {
  children: React.ReactNode;
  className?: string;
}

function CodeBlockHeader({ children, className }: CodeBlockHeaderProps) {
  return (
    <div className={`code-block__header ${className || ""}`}>
      {children}
    </div>
  );
}

interface CodeBlockCodeProps {
  code: string;
  language?: string;
  className?: string;
}

function CodeBlockCode({ code, language, className }: CodeBlockCodeProps) {
  return (
    <pre className={`code-block__code ${className || ""}`}>
      <code className={language ? `language-${language}` : ""}>{code}</code>
    </pre>
  );
}

export const CodeBlock = Object.assign(CodeBlockRoot, {
  Header: CodeBlockHeader,
  Code: CodeBlockCode,
  CopyButton: CodeBlockCopyButton,
});
