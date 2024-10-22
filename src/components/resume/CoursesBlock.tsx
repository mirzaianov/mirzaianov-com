import CoursesList from './CoursesList';

const CoursesBlock = () => {
  return (
    <article className="flex flex-col gap-2">
      <header className="text-xl font-bold uppercase leading-[1.2]">
        Additional Education
      </header>
      <CoursesList />
    </article>
  );
};

export default CoursesBlock;
