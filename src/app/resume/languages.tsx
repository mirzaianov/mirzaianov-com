import { DATA } from '@/data/resume';

export default function Languages() {
  return (
    <article className="flex flex-col gap-2">
      <header className="text-xl font-bold uppercase leading-[1.2]">
        Languages
      </header>
      <ul className="flex flex-col">
        {DATA.languages.map((language) => (
          <li
            key={language.name}
            className="flex items-center gap-1"
          >
            <div className="flex min-w-[62px] items-center gap-[2px]">
              <p>•</p>
              <p className="uppercase">{language.name}</p>
            </div>
            <p>-</p>
            <p>{language.level}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
