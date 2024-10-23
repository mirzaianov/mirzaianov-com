import { getPost } from '@/data/notes';
import { DATA } from '@/data/resume';
import { formatDate } from '@/lib/utils';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export default async function Notes({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let note = await getPost(params.slug);

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
            url: `${DATA.url}/notes/${note.slug}`,
            author: {
              '@type': 'Person',
              name: DATA.name,
            },
          }),
        }}
      />
      <h1 className="title max-w-[650px] text-2xl font-medium tracking-tighter">
        {note.metadata.title}
      </h1>
      <div className="mb-8 mt-2 flex max-w-[650px] items-center justify-between text-sm">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(note.metadata.publishedAt)}
          </p>
        </Suspense>
      </div>
      <article
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: note.source }}
      ></article>
    </main>
  );
}
