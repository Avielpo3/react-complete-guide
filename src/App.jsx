import "./App.css";
import React, { useState } from "react";
import Person from "./components/Person";

const PERSONS = [
  { name: "Max", age: 28, id: 1 },
  { name: "Aviel", age: 33, id: 2 },
];

const App = () => {
  const [persons, setPersons] = useState(PERSONS);

  const switchName = (e) => {
    const newState = persons.map((person, index) =>
      index === 0 ? { name: "a", age: 23 } : person
    );

    setPersons(newState);
  };

  function onNameChangedHandler(event) {
    const { value } = event.target;
  }

  return (
    <div className="App">
      <h1>i'm text</h1>

      <button type="button" onClick={switchName}>
        Change state
      </button>

      <Person
        name={persons[0].name}
        age={persons[0].age}
        onNameChangedHandler={onNameChangedHandler}
      >
        Dynamic content
      </Person>
    </div>
  );
};

export default App;
