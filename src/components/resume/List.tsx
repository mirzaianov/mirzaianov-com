import ListItem from './ListItem';

const List = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem
          key={index}
          text={item}
        />
      ))}
    </ul>
  );
};

export default List;
