import BlurFade from '@/components/magicui/blur-fade';
import ProjectsList from '@/components/projects-list';

const BLUR_FADE_DELAY = 0.04;

export default async function ProjectsPage() {
  return (
    <section id="projects">
      <div className="w-full space-y-12 pb-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                My Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check out my work
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed xl:text-xl/relaxed">
                I&apos;ve worked on a variety of projects, from simple websites
                to complex web applications. Some of them became businesses
                which make money. Here are a few of my favorites.
              </p>
            </div>
          </div>
        </BlurFade>
        <ProjectsList />
      </div>
    </section>
  );
}
