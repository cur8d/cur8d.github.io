
import { Card, Link } from "@heroui/react";

export function TemplateCard({ title, description, icon, url }: { title: string, description: string, icon: string, url?: string }) {
    return <Card className="p-8">
        <Card.Header className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 p-0 text-primary">
            <img src={icon} alt={`${title} icon`} />
        </Card.Header>
        <Card.Content className="p-0 pt-4">
            <Card.Title className="mb-2 text-xl font-semibold">
                {title}
            </Card.Title>
            <p className="text-muted-foreground">
                {description}
            </p>
        </Card.Content>
        <Card.Footer>
            {
                (url && <Link
                    aria-label={`Go to ${title} (opens in new tab)`}
                    href={url}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Go to template
                    <Link.Icon aria-hidden="true" />
                </Link>) || <span className="text-muted-foreground">Coming Soon</span>
            }
        </Card.Footer>
    </Card>
}