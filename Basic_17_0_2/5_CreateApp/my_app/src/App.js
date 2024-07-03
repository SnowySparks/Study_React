import React, { useState, useEffect } from "react";

const Hello = () => {
  function byeFn() {
    console.log("Bye :( ");
  }
  function HiFn() {
    console.log("Hi :) ");
    return byeFn;
  }
  useEffect(HiFn, []);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

const App = () => {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((now) => !now);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
};

export default App;
