import CoursesBlock from './CoursesBlock';
import EducationBlock from './EducationBlock';
import WorkExperienceBlock from './WorkExperienceBlock';

export default function Right() {
  return (
    <section className="flex w-[469px] flex-col justify-between gap-4 rounded-l-lg p-6 py-[19px]">
      <WorkExperienceBlock />
      <div className="block min-h-[1px] w-full rounded-sm bg-primary" />
      <CoursesBlock />
      <div className="block min-h-[1px] w-full rounded-sm bg-primary" />
      <EducationBlock />
    </section>
  );
}
