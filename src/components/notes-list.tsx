import BlurFade from '@/components/magicui/blur-fade';
import { getNotesPosts } from '@/data/notes';
import Link from 'next/link';

const BLUR_FADE_DELAY = 0.04;

export default async function NotesList({
  limit = Infinity,
}: {
  limit?: number;
}) {
  const notes = await getNotesPosts();

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <BlurFade delay={BLUR_FADE_DELAY * 14}>
        {notes
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((note, id) => {
            if (id < limit) {
              return (
                <BlurFade
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                  key={note.slug}
                >
                  <Link
                    className="mb-4 flex flex-col space-y-1"
                    href={`/notes/${note.slug}`}
                  >
                    <div className="flex w-full flex-col">
                      <p className="tracking-tight underline">
                        {note.metadata.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {note.metadata.summary}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {note.metadata.publishedAt}
                      </p>
                    </div>
                  </Link>
                </BlurFade>
              );
            }
          })}
      </BlurFade>
    </div>
  );
}
