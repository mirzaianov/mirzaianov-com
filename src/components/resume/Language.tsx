const Language = ({ language, level }) => {
  return (
    <div className="flex items-center gap-1">
      <div className="flex min-w-[62px] items-center gap-[2px]">
        <p>•</p>
        <p className="p-400-up">{language}</p>
      </div>
      <p>-</p>
      <p>{level}</p>
    </div>
  );
};

export default Language;
