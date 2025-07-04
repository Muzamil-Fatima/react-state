import { useState } from "react";
function Condition() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Condition Multiple in React</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      {
        count == 0? <h1>Condition 0</h1>
        :count == 1? <h1>Condition 1</h1>
        :count == 2? <h1>Condition 2</h1>
        :count == 3? <h1>Condition 3</h1>
        :count == 4? <h1>Condition 4</h1>
        :count == 5? <h1>Condition 5</h1>
        :count == 6? <h1>Condition 6</h1>
        :<h1>Other Condition</h1>
      }
    </>
  );
}

export default Condition;
