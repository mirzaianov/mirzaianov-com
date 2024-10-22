const ListItem = ({ text }) => {
  return (
    <li className="list-item">
      <p>•</p>
      <p>{text}</p>
    </li>
  );
};

export default ListItem;
