import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [rCounter, setRCounter] = useState(10);
  return (
    <div>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <h2>R counter: {rCounter}</h2>
      <button onClick={() => setRCounter(rCounter - 1)}>
        Update R Counter
      </button>
      <button onClick={() => setCount(count + 1)}>Update Counter</button>
    </div>
  );
};

export default Counter;