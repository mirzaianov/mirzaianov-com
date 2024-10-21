import BlurFade from '@/components/magicui/blur-fade';
import { DATA } from '@/data/resume';
import { ProjectCard } from './project-card';

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsList({ limit = Infinity }: { limit?: number }) {
  return (
    <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
      {DATA.projects.map((project, id) => {
        if (id < limit) {
          return (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          );
        }
      })}
    </div>
  );
}
