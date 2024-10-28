type Job = {
  company: string;
  title: string;
  start: string;
  end?: string;
  field: string;
  specialization: string;
  description: readonly string[];
  inResume: boolean;
};

type Props = {
  work: readonly Job[];
};

export default function Experience({ work }: Props) {
  return (
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
                <div className="text-base font-bold leading-[1.2]">
                  {job.title}
                </div>
                <div className="flex flex-wrap items-center gap-1">
                  <div className="text-base font-bold leading-[1.2]">
                    {job.company}
                  </div>
                  <div className="text-base leading-[1.2]">•</div>
                  <div className="text-base leading-[1.2]">{`${job.start} - ${job.end || 'Present'}`}</div>
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
  );
}
