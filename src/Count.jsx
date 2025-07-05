import { useState } from "react";
const Count = () => {
  const [fruit, setFruit] = useState("Apple");
  const handelFruit = () => {
    setFruit("Banana");
  };
  return (
    <div  className="bg-amber-200 m-4 p-4">
      <h1 className="text-2xl font-bold">State in React Js</h1>
      <h1>{fruit}</h1>
      <button 
      className="border-2 border-amber-950 bg-blue-400 p-1 m-2"
      onClick={handelFruit}>Change fruit state</button>
    </div>
  );
};

export default Count;