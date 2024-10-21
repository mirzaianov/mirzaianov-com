import BlurFade from '@/components/magicui/blur-fade';
import { DATA } from '@/data/resume';
import { CourseCard } from '@/components/course-card';

const BLUR_FADE_DELAY = 0.04;

export default function CoursesList({ limit = Infinity }: { limit?: number }) {
  return (
    <BlurFade delay={BLUR_FADE_DELAY * 14}>
      <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
        {DATA.courses
          .filter((course) => course.active)
          .map((course, id) => {
            if (id < limit) {
              return (
                <BlurFade
                  key={course.title + course.date}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <CourseCard
                    title={course.title}
                    description={course.description}
                    source={course.source}
                    author={course.author}
                    active={course.active}
                    date={course.date}
                    image={course.image}
                    links={course.links}
                  />
                </BlurFade>
              );
            }
          })}
      </ul>
    </BlurFade>
  );
}
