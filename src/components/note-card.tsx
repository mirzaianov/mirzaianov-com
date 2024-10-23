import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import Markdown from 'react-markdown';
import rehypeExternalLinks from 'rehype-external-links';

interface Props {
  title: string;
  href?: string;
  summary: string;
  publishedAt: string;
  tags: readonly string[];
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
        'flex h-full flex-col overflow-hidden border transition-all duration-300 ease-out hover:shadow-lg'
      }
    >
      <Link
        href={`/notes/${href}` || '#'}
        className={cn('block cursor-pointer')}
      >
        <CardHeader className="px-2">
          <div className="space-y-1">
            <CardTitle className="mt-1 text-base">{title}</CardTitle>
            <time className="font-sans text-xs">{publishedAt}</time>
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
            <div className="mt-2 flex flex-wrap gap-1">
              {tags?.map((tag) => (
                <Badge
                  className="px-1 py-0 text-[10px]"
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
