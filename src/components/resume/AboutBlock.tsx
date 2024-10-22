import List from './List';

const summaryArray = [
  `1.5 years in Frontend Development, Higher technical education (GPA 4.2), advanced English (C1), collaboration in international cross-functional teams`,
  `Technology Stack: HTML, CSS, JavaScript, React, Next, Redux, TypeScript, Tailwind`,
  `Solid in Algorithms and DSA, have skills in Figma`,
  `Eager to create eye-catching interfaces with cutting-edge web technologies`,
  `Focused on blending aesthetics and functionality, driven by a keen eye for detail`,
  `Goal for the nearest future is to continuously evolve in the realm of modern Frontend Development`,
];

const AboutBlock = () => {
  return (
    <article className="block">
      <header className="h2-700-up">About</header>
      <List items={summaryArray} />
    </article>
  );
};

export default AboutBlock;
