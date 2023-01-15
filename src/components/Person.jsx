const Person = (props) => {
  const { name, age, children, onNameChangedHandler } = props;

  return (
    <div>
      <span className="name">My name is: {name}</span>
      <span className="age"> And my age is: {age}</span>
      <p>{children}</p>

      <input type="text" onChange={onNameChangedHandler} value={name} />
    </div>
  );
};

export default Person;
