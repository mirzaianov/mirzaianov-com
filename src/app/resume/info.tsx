import BlurFade from '@/components/magicui/blur-fade';
import HyperText from '@/components/magicui/hyper-text';
import { VelocityScroll } from '@/components/magicui/scroll-based-velocity';

type Props = {
  name: string;
  role: string;
  skills: readonly string[];
};

const BLUR_FADE_DELAY = 0.04;

export default function Info({ name, role, skills }: Props) {
  return (
    <BlurFade delay={BLUR_FADE_DELAY * 12}>
      <article className="flex flex-col gap-4">
        <div className="inline-block text-3xl font-bold uppercase leading-[1.1] lg:text-[40px]">
          <HyperText
            text={name.split(' ')[0]}
            duration={1500}
          />
          <HyperText
            text={name.split(' ')[1]}
            duration={1500}
          />
        </div>
        <div className="-mt-[6px] flex flex-col gap-1">
          <h2 className="text-base uppercase leading-[1.2] lg:text-xl lg:leading-[1.2]">
            {role}
          </h2>
          {skills.length > 0 && (
            <VelocityScroll
              className="text-sm leading-[1.2] lg:text-base lg:leading-[1.2]"
              text={`${skills.filter((_, index) => index < 5).join(' • ')} • `}
            />
          )}
        </div>
      </article>
    </BlurFade>
  );
}
