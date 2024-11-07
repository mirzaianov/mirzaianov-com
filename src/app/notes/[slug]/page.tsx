import { getPost } from '@/data/notes-data';
import { MAIN_DATA } from '@/data/main-data';
import { formatDate } from '@/lib/utils';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import BlurFade from '@/components/magicui/blur-fade';
import BackButton from '@/components/back-button';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const BLUR_FADE_DELAY = 0.04;

export const dynamic = 'force-static';

export default async function Notes({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const note = await getPost(params.slug);

  if (!note) {
    notFound();
  }

  return (
    <main id="note">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NotesPosting',
            headline: note.metadata.title,
            datePublished: note.metadata.publishedAt,
            description: note.metadata.summary,
            tags: note.metadata.tags,
            url: `${MAIN_DATA.url}/notes/${note.slug}`,
            author: note.metadata.author,
          }),
        }}
      />
      <div className="w-full space-y-12 pb-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              {note.metadata.tags && note.metadata.tags.length > 0 ? (
                <ul className="flex flex-wrap justify-center gap-1">
                  {note.metadata.tags.split(', ').map((tag: string) => (
                    <li
                      className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background"
                      key={tag}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                  Note
                </div>
              )}
              <h2 className="text-balance text-3xl font-bold tracking-tighter sm:text-5xl">
                {note.metadata.title}
              </h2>
              {note.metadata.author && (
                <h3 className="text-balance text-2xl/relaxed font-bold tracking-tighter sm:text-3xl/relaxed">
                  by {note.metadata.author}
                </h3>
              )}
              <Suspense fallback={<p className="h-5" />}>
                <p className="text-muted-foreground md:text-xl/relaxed xl:text-xl/relaxed">
                  added on {formatDate(note.metadata.publishedAt)}
                </p>
              </Suspense>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <article
            className="scrollable-table prose text-sm dark:prose-invert prose-pre:text-muted-foreground dark:prose-pre:bg-secondary sm:text-base"
            dangerouslySetInnerHTML={{ __html: note.source }}
          />
        </BlurFade>
        {note.metadata.url && (
          <BlurFade
            className="flex justify-center"
            delay={BLUR_FADE_DELAY * 17}
          >
            <Button
              asChild
              className="group pr-2 text-sm transition-all duration-300 hover:scale-105 sm:text-base"
            >
              <Link
                href={note.metadata.url}
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center gap-1"
              >
                Read more
                <ChevronRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </BlurFade>
        )}
        <BlurFade delay={BLUR_FADE_DELAY * 19}>
          <BackButton />
        </BlurFade>
      </div>
    </main>
  );
}
