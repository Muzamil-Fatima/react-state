import { useState } from "react";
function User() {
  const [display, setDisplay] = useState(true);
  return (
    <div className="bg-amber-200 m-4 p-4" >
      <h1 className="text-2xl font-bold">Toggle in React JS</h1>
      {display ? <h1>Muzamil Fatima</h1> : null}
      <button
      className="border-2 border-amber-950 bg-blue-400 p-1 m-2"
      onClick={() => setDisplay(!display)}>Toggle</button>
    </div>
  );
}

export default User;
