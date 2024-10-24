import { DATA } from '@/data/resume';

const InfoBlock = () => {
  return (
    <article className="flex flex-col gap-4">
      <h1 className="inline-block text-[40px] font-bold uppercase leading-[1.1]">
        Riaz
        <br />
        Mirzaianov
      </h1>
      <div className="-mt-[6px] flex flex-col gap-1">
        <h2 className="text-xl uppercase leading-[1.2]">{DATA.role}</h2>
        <h3 className="text-base leading-[1.2]">
          {DATA.skills.length > 0 &&
            DATA.skills.filter((_, index) => index < 3).join(' • ')}
        </h3>
      </div>
    </article>
  );
};

export default InfoBlock;