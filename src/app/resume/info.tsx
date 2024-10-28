type Props = {
  name: string;
  role: string;
  skills: readonly string[];
};

export default function Info({ name, role, skills }: Props) {
  return (
    <article className="flex flex-col gap-4">
      <h1 className="inline-block text-3xl font-bold uppercase leading-[1.1] lg:text-[40px]">
        {name.split(' ')[0]}
        <br />
        {name.split(' ')[1]}
      </h1>
      <div className="-mt-[6px] flex flex-col gap-1">
        <h2 className="text-base uppercase leading-[1.2] lg:text-xl lg:leading-[1.2]">
          {role}
        </h2>
        <h3 className="text-xs leading-[1.2] lg:text-base lg:leading-[1.2]">
          {skills.length > 0 &&
            skills.filter((_, index) => index < 3).join(' • ')}
        </h3>
      </div>
    </article>
  );
}
