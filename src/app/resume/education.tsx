export default function Education() {
  return (
    <article>
      <header className="text-xl font-bold uppercase leading-[1.2]">
        Education
      </header>
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-1">
          <div className="text-base font-bold leading-[1.2]">
            Master’s Degree
          </div>
          <div className="text-base leading-[1.2]">•</div>
          <div className="text-base leading-[1.2]">Engineering Technology</div>
          <div className="text-base leading-[1.2]">•</div>
          <div className="text-base leading-[1.2]">GPA 4.2</div>
        </div>
        <div className="flex gap-1">
          <p className="font-bold">Higher Education</p>
          <p>•</p>
          <p>Full-time</p>
        </div>
        <p>
          Kazan National Research Technical University named after A.N.
          Tupolev–KAI
        </p>
      </div>
    </article>
  );
}
