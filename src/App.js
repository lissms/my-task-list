import React from "react";
import { useState } from "react";

const App = () => {
  const [age, setAge] = useState(20);
  const handleClick = () => {
    setAge(age + 1);
  };
  return (
    <div>
      <p>Hoy tengo {age} años</p>
      <button onClick={handleClick}>hazme más viejo</button>
    </div>
  );
};

export default App;
