import Link from 'next/link';
import { DATA } from '@/data/resume';

const CoursesBlock = () => {
  return (
    <article className="flex flex-col gap-2">
      <header className="text-xl font-bold uppercase leading-[1.2]">
        Additional Education
      </header>
      <ul className="flex flex-col gap-1">
        {DATA.courses
          .filter((course) => course.inResume)
          .sort((a, b) => b.date.localeCompare(a.date))
          .map((course) => (
            <li
              key={course.title}
              className="flex flex-col"
            >
              <Link
                className="self-start"
                href={
                  course.links.find((field) => field.title === 'Website')
                    ?.href || ''
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="flex-nowrap overflow-hidden text-ellipsis font-bold">
                  {course.title}
                </p>
              </Link>
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
  );
};

export default CoursesBlock;
