import BlurFade from '@/components/magicui/blur-fade';

type School = {
  degree: string;
  specialization: string;
  gpa: number;
  type: string;
  mode: string;
  name: string;
};

type Props = {
  education: readonly School[];
};

const BLUR_FADE_DELAY = 0.04;

export default function Education({ education }: Props) {
  return (
    <BlurFade delay={BLUR_FADE_DELAY * 20}>
      <article className="flex flex-col gap-2">
        <header className="text-xl font-bold uppercase leading-[1.2]">
          Education
        </header>
        <ul className="flex flex-col gap-1">
          {education.map((school) => (
            <li
              key={school.name}
              className="flex flex-col gap-1"
            >
              <div className="flex flex-wrap items-center gap-1">
                <div className="text-base font-bold leading-[1.2]">
                  {school.degree}
                </div>
                <div className="text-base leading-[1.2]">•</div>
                <div className="text-base leading-[1.2]">
                  {school.specialization}
                </div>
                <div className="text-base leading-[1.2]">•</div>
                <div className="text-base leading-[1.2]">GPA {school.gpa}</div>
              </div>
              <div className="flex gap-1">
                <p className="font-bold">{school.type}</p>
                <p>•</p>
                <p>{school.mode}</p>
              </div>
              <p>{school.name}</p>
            </li>
          ))}
        </ul>
      </article>
    </BlurFade>
  );
}
