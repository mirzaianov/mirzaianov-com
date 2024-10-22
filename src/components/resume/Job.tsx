import Duties from './Duties';

const Job = ({ jobTitle, company, date, field, specificity, achievements }) => {
  return (
    <div className="list list-xs">
      <div className="list">
        <div className="h3-700">{jobTitle}</div>
        <div className="job__info">
          <div className="h3-700">{company}</div>
          <div className="h3-400">•</div>
          <div className="h3-400">{date}</div>
        </div>
        <div className="job__field">
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
