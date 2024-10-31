import BlurFade from '@/components/magicui/blur-fade';
import ProjectsList from '@/components/projects-list';
import { PROJECTS_DATA } from '@/data/projects-data';

const BLUR_FADE_DELAY = 0.04;

export default async function ProjectsPage() {
  return (
    <main id="projects">
      <div className="w-full space-y-12 pb-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <section className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                {PROJECTS_DATA.pageBadge}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {PROJECTS_DATA.pageTitle}
              </h2>
              <p className="text-balance text-muted-foreground md:text-xl/relaxed xl:text-xl/relaxed">
                I have worked on a variety of projects, from simple websites to
                complex web applications. Some of them became businesses which
                make money. Here are a few of my favorites.
              </p>
            </div>
          </section>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <ProjectsList />
        </BlurFade>
      </div>
    </main>
  );
}
