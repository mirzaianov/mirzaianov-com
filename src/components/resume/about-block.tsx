import { DATA } from '@/data/resume';

const AboutBlock = () => {
  return (
    <article className="flex flex-col gap-2">
      <header className="text-xl font-bold uppercase leading-[1.2]">
        About
      </header>
      <ul>
        {DATA.about.map((paragraph, index) => (
          <li
            key={index}
            className="flex gap-[2px]"
          >
            <p>•</p>
            <p>{paragraph}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default AboutBlock;
