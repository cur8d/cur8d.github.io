import { Card, Link, Chip } from "@heroui/react";
import { FaGithub } from "react-icons/fa6";
import { Template } from "@/types/template";

export interface TemplateCardProps extends Template {}

export function TemplateCard({
  title,
  description,
  icon,
  github,
  docs,
  preview,
  status,
}: TemplateCardProps) {
  return (
    <Card className="p-8">
      <Card.Header className="flex flex-row items-start justify-between p-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 p-0 font-semibold overflow-hidden">
          <span className="text-card-icon">{`.${icon}`}</span>
        </div>
        {github && (
          <Link
            aria-label={`View ${title} repository on GitHub (opens in new tab)`}
            href={github}
            rel="noopener noreferrer"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FaGithub className="size-6" />
          </Link>
        )}
      </Card.Header>
      <Card.Content className="p-0 pt-4">
        <Card.Title className="mb-2 text-xl font-semibold">
          {title} {status && <Chip size="md">{status.toLowerCase()}</Chip>}
        </Card.Title>
        <p className="text-muted-foreground">{description}</p>
      </Card.Content>
      <Card.Footer>
        {((docs || preview) && (
          <div className="flex gap-2">
            {docs && (
              <Link
                aria-label={`Go to ${title} docs (opens in new tab)`}
                href={docs}
                rel="noopener noreferrer"
                target="_blank"
              >
                Docs
                <Link.Icon aria-hidden="true" />
              </Link>
            )}
            {preview && (
              <Link
                aria-label={`Go to ${title} demo (opens in new tab)`}
                href={preview}
                rel="noopener noreferrer"
                target="_blank"
              >
                Preview
                <Link.Icon aria-hidden="true" />
              </Link>
            )}
          </div>
        )) || <span className="text-secondary-foreground">Coming Soon</span>}
      </Card.Footer>
    </Card>
  );
}
