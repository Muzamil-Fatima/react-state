import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [rCounter, setRCounter] = useState(10);
  return (
    <div className="bg-amber-200 m-4 p-4">
      <h1 className="text-2xl font-bold">Counter</h1>
      <h1>{count}</h1>
      <h2>R counter: {rCounter}</h2>
      <button
      className="border-2 border-amber-950 bg-blue-400 p-1 m-2"
      onClick={() => setRCounter(rCounter - 1)}>
        Update R Counter
      </button>
      <button
      className="border-2 border-amber-950 bg-blue-400 p-1 m-2"
      onClick={() => setCount(count + 1)}>Update Counter</button>
    </div>
  );
};

export default Counter;
