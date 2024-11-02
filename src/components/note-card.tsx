import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn, formatDate } from '@/lib/utils';
import Link from 'next/link';
import Markdown from 'react-markdown';
import rehypeExternalLinks from 'rehype-external-links';

interface Props {
  title: string;
  href?: string;
  summary: string;
  publishedAt: string;
  tags: string;
}

export default function NoteCard({
  title,
  href,
  summary,
  publishedAt,
  tags,
}: Props) {
  return (
    <Card
      className={
        'flex h-full flex-col overflow-hidden border transition-all duration-300 ease-out hover:shadow-lg hover:shadow-primary/20'
      }
    >
      <Link
        href={`/notes/${href}` || '#'}
        className={cn('block cursor-pointer')}
      >
        <CardHeader className="p-2">
          <div className="space-y-1">
            <CardTitle className="text-base">{title}</CardTitle>
            <time className="font-sans text-xs">{formatDate(publishedAt)}</time>
            <Markdown
              rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }]]}
              className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert"
            >
              {summary}
            </Markdown>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex flex-col px-2 pb-2">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {tags?.split(', ').map((tag) => (
                <Badge
                  className="px-1.5 py-0.5 text-xs"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Link>
    </Card>
  );
}
