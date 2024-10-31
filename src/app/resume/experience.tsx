import BlurFade from '@/components/magicui/blur-fade';
import { shortenDate } from '@/lib/utils';
import Link from 'next/link';

type Job = {
  company: string;
  title: string;
  href: string;
  start: string;
  end: string;
  field: string;
  specialization: string;
  description: readonly string[];
  inResume: boolean;
  self?: boolean;
};

type Props = {
  work: readonly Job[];
};

const BLUR_FADE_DELAY = 0.04;

export default function Experience({ work }: Props) {
  return (
    <BlurFade delay={BLUR_FADE_DELAY * 14}>
      <article className="flex flex-col gap-4">
        <header className="text-xl font-bold uppercase leading-[1.2]">
          Work Experience
        </header>
        <ul className="flex flex-col gap-4">
          {work
            .filter((job) => job.inResume)
            .map((job) => (
              <ul
                key={job.company}
                className="flex flex-col gap-2"
              >
                <div className="flex flex-col gap-1">
                  <div className="text-sm font-bold leading-[1.2] lg:text-base lg:leading-[1.2]">
                    {job.title}
                  </div>
                  <div className="flex flex-wrap items-center gap-1 text-sm leading-[1.2] lg:text-base lg:leading-[1.2]">
                    <Link
                      href={job.href}
                      className="lg:link-hover-effect lg:link-hover-effect:hover lg:no-truncate truncate font-bold underline underline-offset-[0.1rem] lg:self-start lg:overflow-auto lg:no-underline"
                      target={job?.self ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                    >
                      {job.company}
                    </Link>
                    <div className="">•</div>
                    <div className="lg:hidden">{`${shortenDate(job.start)} - ${shortenDate(job.end) || 'Present'}`}</div>
                    <div className="hidden lg:block">{`${job.start} - ${job.end || 'Present'}`}</div>
                  </div>
                  <div className="flex flex-wrap items-center gap-1">
                    <div>{job.field}</div>
                    <div>•</div>
                    <div>{job.specialization}</div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <ul>
                    {job.description.map((item, index) => (
                      <li
                        key={index}
                        className="flex gap-[2px]"
                      >
                        <p>•</p>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </ul>
            ))}
        </ul>
      </article>
    </BlurFade>
  );
}
