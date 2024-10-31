import BlurFade from '@/components/magicui/blur-fade';
import CoursesList from '@/components/courses-list';
import { COURSES_DATA } from '@/data/courses-data';

const BLUR_FADE_DELAY = 0.04;

export default async function CoursesPage() {
  return (
    <main id="courses">
      <div className="w-full space-y-12">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                {COURSES_DATA.pageBadge}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {COURSES_DATA.pageTitle}
              </h2>
              <p className="text-balance text-muted-foreground md:text-xl/relaxed xl:text-xl/relaxed">
                To boost professional growth and broaden horizons, I attend
                online classes. Discover{' '}
                <span>
                  {COURSES_DATA.list.filter((course) => course.active).length}
                </span>
                + first-rate courses that I have accomplished.
              </p>
            </div>
          </div>
        </BlurFade>
        <CoursesList />
      </div>
    </main>
  );
}
