import { useState } from "react";

function Condition() {

  const [count, setCount] = useState(0);
  
  return (
    <div className="bg-amber-200 m-4 p-4" >
      <h1 className="text-2xl font-bold">Condition Multiple in React</h1>
      <h1>Current Count: {count}</h1>
      <button 
      className="border-2 border-amber-950 bg-blue-400 p-1 m-2"
      onClick={() => setCount(count + 1)}>Counter</button>
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
    </div>
  );
}

export default Condition;
