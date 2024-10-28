import BlurFade from '@/components/magicui/blur-fade';

type Props = {
  resumeSkills: readonly string[];
};

const BLUR_FADE_DELAY = 0.04;

export default function Skills({ resumeSkills }: Props) {
  return (
    <BlurFade delay={BLUR_FADE_DELAY * 18}>
      <article className="flex cursor-default flex-col gap-2">
        <header className="text-xl font-bold uppercase leading-[1.2]">
          Skills
        </header>
        <ul className="flex flex-wrap gap-1">
          {resumeSkills.map((skill, index) => (
            <BlurFade
              key={skill}
              delay={BLUR_FADE_DELAY * 18 + index * 0.01}
            >
              <li
                key={skill}
                className="inline-block rounded-sm px-2 py-1 outline outline-1 -outline-offset-1 outline-primary transition-colors hover:bg-foreground hover:text-background"
              >
                {skill}
              </li>
            </BlurFade>
          ))}
        </ul>
      </article>
    </BlurFade>
  );
}
