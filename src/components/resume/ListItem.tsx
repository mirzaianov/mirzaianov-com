const ListItem = ({ text }) => {
  return (
    <li className="flex gap-[2px]">
      <p>•</p>
      <p>{text}</p>
    </li>
  );
};

export default ListItem;
