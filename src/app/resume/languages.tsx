type Language = {
  name: string;
  level: string;
};

type Props = {
  languages: readonly Language[];
};

export default function Languages({ languages }: Props) {
  return (
    <article className="flex flex-col gap-2">
      <header className="text-xl font-bold uppercase leading-[1.2]">
        Languages
      </header>
      <ul className="flex flex-col">
        {languages.map((language) => (
          <li
            key={language.name}
            className="flex items-center gap-1"
          >
            <div className="flex min-w-[62px] items-center gap-[2px]">
              <p>•</p>
              <p className="uppercase">{language.name}</p>
            </div>
            <p>-</p>
            <p className="truncate">{language.level}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
