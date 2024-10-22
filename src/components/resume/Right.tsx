import CoursesBlock from './CoursesBlock';
import Divider from './Divider';
import EducationBlock from './EducationBlock';
import WorkExperienceBlock from './WorkExperienceBlock';

const Right = () => {
  return (
    <section className="flex flex-col gap-4 rounded-l-lg p-6 py-[19px]">
      <WorkExperienceBlock />
      <Divider />
      <CoursesBlock />
      <Divider />
      <EducationBlock />
    </section>
  );
};

export default Right;
