import BlurFade from '@/components/magicui/blur-fade';
import { getNotesPosts } from '@/data/notes-data';
import NoteCard from '@/components/note-card';

const BLUR_FADE_DELAY = 0.04;

export default async function NotesList({
  limit = Infinity,
}: {
  limit?: number;
}) {
  const notes = await getNotesPosts();

  return (
    <BlurFade delay={BLUR_FADE_DELAY * 14}>
      <div className="grid place-content-center justify-stretch">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
                    <NoteCard
                      title={note.metadata.title}
                      href={note.slug}
                      summary={note.metadata.summary}
                      publishedAt={note.metadata.publishedAt}
                      tags={note.metadata.tags}
                    />
                  </BlurFade>
                );
              }
            })}
        </div>
      </div>
    </BlurFade>
  );
}
