import Duties from './Duties';

const Job = ({ jobTitle, company, date, field, specificity, achievements }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <div className="text-base font-bold leading-[1.2]">{jobTitle}</div>
        <div className="flex flex-wrap items-center gap-1">
          <div className="text-base font-bold leading-[1.2]">{company}</div>
          <div className="text-base leading-[1.2]">•</div>
          <div className="text-base leading-[1.2]">{date}</div>
        </div>
        <div className="flex flex-wrap items-center gap-1">
          <div>{field}</div>
          <div>•</div>
          <div>{specificity}</div>
        </div>
      </div>
      <Duties duties={achievements} />
    </div>
  );
};

export default Job;
