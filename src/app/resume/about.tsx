import BlurFade from '@/components/magicui/blur-fade';

type Props = {
  about: readonly string[];
};

const BLUR_FADE_DELAY = 0.04;

export default function About({ about }: Props) {
  return (
    <BlurFade delay={BLUR_FADE_DELAY * 16}>
      <article className="flex flex-col gap-2">
        <header className="text-xl font-bold uppercase leading-[1.2]">
          About
        </header>
        <ul>
          {about.map((paragraph, index) => (
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
    </BlurFade>
  );
}
