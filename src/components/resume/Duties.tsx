import List from './List';

const Duties = ({ duties }) => {
  return (
    <div className="flex flex-col gap-1">
      <List items={duties} />
    </div>
  );
};

export default Duties;
