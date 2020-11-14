import React from "react";
import { useState } from "react";
import Gift from "./components/Gift";

const App = () => {
  const [age, setAge] = useState(20);
  const [gift, setGift] = useState(1);

  const handleClick = (id) => {
    if (id === "a1") {
      setAge(age + 1);
    } else if (id === "g1") {
      setGift(gift + 1);
    }
  };

  return (
    <div>
      <Gift text={`Tengo ${age}años.`} textButton="Hazme más viejo" id="a1" handleFunc={handleClick}></Gift>
      <Gift text={`Tengo ${gift}regalos.`} textButton="Hazme más regalos" id="g1" handleFunc={handleClick}></Gift>
    </div>
  );
};

export default App;
