import BlurFade from '@/components/magicui/blur-fade';

type Language = {
  name: string;
  level: string;
};

type Props = {
  languages: readonly Language[];
};

const BLUR_FADE_DELAY = 0.04;

export default function Languages({ languages }: Props) {
  return (
    <BlurFade delay={BLUR_FADE_DELAY * 20}>
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
    </BlurFade>
  );
}
