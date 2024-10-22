import Skill from './Skill';

const SkillsBlock = () => {
  return (
    <article className="flex flex-col gap-2">
      <header className="text-xl font-bold uppercase leading-[1.2]">
        Skills
      </header>
      <div className="flex flex-wrap gap-1">
        <Skill skillName="JavaScript" />
        <Skill skillName="React" />
        <Skill skillName="TypeScript" />
        <Skill skillName="Git" />
        <Skill skillName="HTML" />
        <Skill skillName="CSS" />
        <Skill skillName="Redux" />
        <Skill skillName="React Router" />
        <Skill skillName="Frontend" />
        <Skill skillName="Webpack" />
        <Skill skillName="SASS" />
        <Skill skillName="Firebase" />
        <Skill skillName="REST" />
        <Skill skillName="Cross-Browser Compatibility" />
        <Skill skillName="UI" />
        <Skill skillName="OOP" />
        <Skill skillName="API" />
        <Skill skillName="SEO" />
        <Skill skillName="Figma" />
        <Skill skillName="Bootstrap" />
        <Skill skillName="SQL" />
        <Skill skillName="Adaptive Web Design" />
        <Skill skillName="SCSS" />
        <Skill skillName="ES6" />
        <Skill skillName="Responsive Web Design" />
        <Skill skillName="Linux" />
        <Skill skillName="BEM" />
        <Skill skillName="Mobile First" />
        <Skill skillName="HTTP" />
        <Skill skillName="Vite" />
        <Skill skillName="SPA" />
        <Skill skillName="Jira" />
        <Skill skillName="Tailwind" />
        <Skill skillName="Algorithms" />
        <Skill skillName="Data Structures" />
        <Skill skillName="React Hooks" />
        <Skill skillName="CSS-modules" />
        <Skill skillName="Github Flow" />
        <Skill skillName="RTK" />
        <Skill skillName="Tanstack Query" />
        <Skill skillName="Gitflow" />
        <Skill skillName="ESLint" />
      </div>
    </article>
  );
};

export default SkillsBlock;
