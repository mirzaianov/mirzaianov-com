import { DATA } from '@/data/resume';

export default function Experience() {
  return (
    <article className="flex flex-col gap-4">
      <header className="text-xl font-bold uppercase leading-[1.2]">
        Work Experience
      </header>
      <ul className="flex flex-col gap-4">
        {DATA.work
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
                  <div>{job.specificity}</div>
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
