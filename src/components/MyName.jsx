const MyName = ({ name, getName }) => {
  const x = "World !";
  getName(x);
  return <h2>{name}</h2>;
};

export default MyName;
