import BlurFade from '@/components/magicui/blur-fade';
import NotesList from '@/components/notes-list';
import { NOTES_DATA } from '@/data/notes-data';

const BLUR_FADE_DELAY = 0.04;

export default function NotePage() {
  return (
    <main id="notes">
      <div className="w-full space-y-12 pb-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                {NOTES_DATA.pageBadge}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {NOTES_DATA.pageTitle}
              </h2>
              <p className="text-balance text-muted-foreground md:text-xl/relaxed xl:text-xl/relaxed">
                I study a lot and usually save notes that seemed useful. Here I
                share some of my notes.
              </p>
            </div>
          </div>
        </BlurFade>
        <NotesList />
      </div>
    </main>
  );
}
