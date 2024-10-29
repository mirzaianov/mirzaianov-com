import BlurFade from '@/components/magicui/blur-fade';
import Link from 'next/link';

type Course = {
  title: string;
  date: string;
  source: string;
  author: string;
  inResume?: boolean;
  links?: readonly {
    title: string;
    icon: React.ReactNode;
    href: string;
  }[];
};

type Props = {
  courses: readonly Course[];
};

const BLUR_FADE_DELAY = 0.04;

export default function Courses({ courses }: Props) {
  return (
    <BlurFade delay={BLUR_FADE_DELAY * 17}>
      <article className="flex flex-col gap-2">
        <header className="text-xl font-bold uppercase leading-[1.2]">
          Additional Education
        </header>
        <ul className="flex flex-col gap-1">
          {courses
            .filter((course) => course.inResume)
            .sort((a, b) => b.date.localeCompare(a.date))
            .map((course) => (
              <li
                key={course.title}
                className="flex flex-col"
              >
                {course.links && course.links.length > 0 && (
                  <Link
                    className="lg:link-hover-effect lg:link-hover-effect:hover lg:no-truncate truncate font-bold underline underline-offset-[0.1rem] lg:self-start lg:overflow-auto lg:no-underline"
                    href={
                      course.links.find((field) => field.title === 'Website')
                        ?.href || ''
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {course.title}
                  </Link>
                )}
                <div className="flex items-center gap-1 py-[1px] pl-4">
                  <p>{course.source}</p>
                  <p>•</p>
                  <p>{course.author}</p>
                  <p>•</p>
                  <p>{course.date}</p>
                </div>
              </li>
            ))}
        </ul>
      </article>
    </BlurFade>
  );
}
