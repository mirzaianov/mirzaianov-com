import BlurFade from '@/components/magicui/blur-fade';
import NotesList from '@/components/notes-list';

const BLUR_FADE_DELAY = 0.04;

export default function NotePage() {
  return (
    <section id="notes">
      <div className="w-full space-y-12 pb-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                My Notes
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Dig in the latest notes
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed xl:text-xl/relaxed">
                I study a lot and usually take notes to keep them in mind. Here
                I share some of my notes.
              </p>
            </div>
          </div>
        </BlurFade>
        <NotesList />
      </div>
    </section>
  );
}
