import Course from './Course';

const CoursesList = () => {
  return (
    <ul className="list">
      <Course
        courseName="React & TypeScript - The Practical Guide"
        resource="Udemy"
        author="Maximilian Schwarzmüller"
        year="2024"
        href="https://www.udemy.com/course/react-typescript-the-practical-guide/"
      />
      <Course
        courseName="Modern TypeScript Complete Course"
        resource="Udemy"
        author="Ivan Petrychenko"
        year="2024"
        href="https://www.udemy.com/course/modern_typescript/"
      />
      <Course
        courseName="React - React & Redux Complete Course"
        resource="Udemy"
        author="Bogdan Stashchuk"
        year="2024"
        href="https://www.udemy.com/course/react-ru/"
      />
      <Course
        courseName="API and Web Service Introduction"
        resource="Udemy"
        author="Nate Ross"
        year="2024"
        href="https://www.udemy.com/course/api-and-web-service-introduction/"
      />
      <Course
        courseName="Conquering Responsive Layouts"
        resource="KP"
        author="Kevin Powell"
        year="2023"
        href="https://courses.kevinpowell.co/conquering-responsive-layouts"
      />
      <Course
        courseName="CSS - The Complete Guide 2024 (incl. Flexbox, Grid & Sass)"
        resource="Udemy"
        author="Maximilian Schwarzmüller"
        year="2023"
        href="https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/"
      />
      <Course
        courseName="JavaScript + React Complete Course"
        resource="Udemy"
        author="Ivan Petrychenko"
        year="2022"
        href="https://www.udemy.com/course/javascript_full/"
      />
    </ul>
  );
};

export default CoursesList;
