import BlurFade from '@/components/magicui/blur-fade';
import { DATA } from '@/data/resume';
import CoursesList from '@/components/courses-list';

const BLUR_FADE_DELAY = 0.04;

export default async function CoursesPage() {
  return (
    <section id="courses">
      <div className="w-full space-y-12">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                Courses
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Follow my study path
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed xl:text-xl/relaxed">
                To boost my professional growth and broaden horizons, I
                completed{' '}
                <span>
                  {DATA.courses.filter((course) => course.active).length}
                </span>
                + online courses.
              </p>
            </div>
          </div>
        </BlurFade>
        <CoursesList />
      </div>
    </section>
  );
}
