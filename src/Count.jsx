import { useState } from "react";
const Count = () => {
  const [fruit, setFruit] = useState("Apple");
  const handelFruit = () => {
    setFruit("Banana");
  };
  return (
    <>
      <h1>State in React Js</h1>
      <h1>{fruit}</h1>
      <button onClick={handelFruit}>Change fruit state</button>
    </>
  );
};

export default Count;