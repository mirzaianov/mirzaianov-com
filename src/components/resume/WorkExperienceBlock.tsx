import Job from './Job';

const freelanceAchievements = [
  `Crafted 10 compelling landing pages from scratch, harnessing HTML, CSS (SASS), and JavaScript (ES6+) to captivate audiences. Leveraged cutting-edge Flexbox, Grid, Transitions, and Animations to deliver seamless experiences, resulting in a 20% increase in customer engagement`,
  `Engineered 3 top-of-the-line single-page applications (SPAs) using React & Tailwind, transforming audience interactions with intuitive interfaces and faster load times, leading to a 30% boost in user retention`,
  `Refactored a major project by migrating from JavaScript to React, integrating advanced features like react-hooks, react-router, and lazy-loading, culminating in a 55% improvement in overall efficiency`,
  `Overhauled 2 JavaScript projects, ensuring cross-browser compatibility and adaptive, responsive layouts, driving a 150% surge in conversion rates and client satisfaction`,
  `Led a successful collaboration with a backend team to integrate RESTful APIs into frontend applications, enhancing data retrieval efficiency by 40% and improving overall application performance`,
  `Conceptualized and delivered 5 captivating User Interfaces in Figma, surpassing client expectations with innovative usage of Variables, Styles, and Components. Embraced Responsive Design principles (Auto Layout) for flawless cross-platform usability`,
];

const knorrAchievements = [
  `Completed 3 localization projects of Air Disk Brake (ADB) components, started the serial manufacturing`,
  `Implemented 100+ devices, toolings and equipment in production lines,  measuring and testing laboratories`,
  `Designed 700+ component, assembly, installation drawings, specifications, using PTC CREO, Teamcenter & MathCad`,
  `Managed DFMEA analysis for 3 products utilizing PLATO SCIO`,
  `Mentored 5 junior engineers in R&D processes and CAD work`,
];

const Experience = () => {
  return (
    <article className="block-s block">
      <header className="h2-700-up">Work Experience</header>
      <Job
        jobTitle="Frontend Developer"
        company="Freelance"
        date="April 2023 - Present"
        field="Software Engineering"
        specificity="Web Development"
        achievements={freelanceAchievements}
      />
      <Job
        jobTitle="R&D Engineer"
        company="Knorr-Bremse AG"
        field="Automotive"
        specificity="Braking Systems"
        date="April 2017 - September 2022"
        achievements={knorrAchievements}
      />
    </article>
  );
};

export default Experience;
