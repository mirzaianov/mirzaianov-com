type Props = {
  resumeSkills: readonly string[];
};

export default function Skills({ resumeSkills }: Props) {
  return (
    <article className="flex flex-col gap-2">
      <header className="text-xl font-bold uppercase leading-[1.2]">
        Skills
      </header>
      <ul className="flex flex-wrap gap-1">
        {resumeSkills.map((skill) => (
          <li
            key={skill}
            className="inline-block rounded-sm px-2 py-1 outline outline-1 -outline-offset-1 outline-primary"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
