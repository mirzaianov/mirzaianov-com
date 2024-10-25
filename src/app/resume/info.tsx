import { DATA } from '@/data/resume';

export default function Info() {
  return (
    <article className="flex flex-col gap-4">
      <h1 className="inline-block text-3xl font-bold uppercase leading-[1.1] lg:text-[40px]">
        Riaz
        <br />
        Mirzaianov
      </h1>
      <div className="-mt-[6px] flex flex-col gap-1">
        <h2 className="text-base uppercase leading-[1.2] lg:text-xl">
          {DATA.role}
        </h2>
        <h3 className="text-xs leading-[1.2]">
          {DATA.skills.length > 0 &&
            DATA.skills.filter((_, index) => index < 3).join(' • ')}
        </h3>
      </div>
    </article>
  );
}
