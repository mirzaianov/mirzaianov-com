import CoursesBlock from './courses-block';
import EducationBlock from './education-block';
import WorkExperienceBlock from './WorkExperienceBlock';

export default function Right() {
  return (
    <section className="flex w-[469px] flex-col justify-between gap-4 rounded-l-lg p-6 pt-[19px]">
      <WorkExperienceBlock />
      <Divider />
      <CoursesBlock />
      <Divider />
      <EducationBlock />
    </section>
  );
}

function Divider() {
  return <div className="block min-h-[1px] w-full rounded-sm bg-primary" />;
}
