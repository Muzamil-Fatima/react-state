import { useState } from "react";

export default function Extra() {
 const [count, setCount]=useState(0)
 const [rcount, setRCount]=useState(0)
  return (
    <div>
       <p>Current Count : {count}</p>
       <p>Current Count : {rcount}</p>
      <button 
      onClick={()=> setCount(count+1)}
      className="bg-blue-400 border p-2">Increment Counter</button>
      <button 
   
      onClick={()=> setRCount(rcount-1)}
      className="bg-blue-400 border p-2">Decrement Counter</button>
    </div>
  );
}
