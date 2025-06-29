import { useState } from "react";
function User() {
  const [display, setDisplay] = useState(true);
  return (
    <>
      <h1>Toggle in React JS</h1>
      {display ? <h1>Muzamil Fatima</h1> : null}
      <button onClick={() => setDisplay(!display)}>Toggle</button>
    </>
  );
}

export default User;
