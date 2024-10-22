const Course = ({ courseName, resource, author, year, href }) => {
  return (
    <li className="flex flex-col">
      <a
        className="self-start"
        href={href}
        target="_blank"
      >
        <p className="flex-nowrap overflow-hidden text-ellipsis font-bold">
          {courseName}
        </p>
      </a>
      <div className="flex items-center gap-1 py-[1px] pl-4">
        <p>{resource}</p>
        <p>•</p>
        <p>{author}</p>
        <p>•</p>
        <p>{year}</p>
      </div>
    </li>
  );
};

export default Course;
