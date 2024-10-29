import { getPost } from '@/data/notes-data';
import { MAIN_DATA } from '@/data/main-data';
import { formatDate } from '@/lib/utils';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import BlurFade from '@/components/magicui/blur-fade';
import Markdown from 'react-markdown';
import rehypeExternalLinks from 'rehype-external-links';
import BackButton from '@/components/back-button';

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
            author: {
              '@type': 'Person',
              name: MAIN_DATA.name,
            },
          }),
        }}
      />
      <div className="w-full space-y-12 pb-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                Note
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {note.metadata.title}
              </h2>
              <Suspense fallback={<p className="h-5" />}>
                <p className="text-muted-foreground md:text-xl/relaxed xl:text-xl/relaxed">
                  {formatDate(note.metadata.publishedAt)}
                </p>
              </Suspense>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <article className="prose dark:prose-invert">
            <Markdown
              rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }]]}
            >
              {note.source}
            </Markdown>
          </article>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 19}>
          <BackButton />
        </BlurFade>
      </div>
    </main>
  );
}
