import React, { useState } from "react";

const Button = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter((count) => count + 1)}>+</button>
      <button onClick={() => setCounter((count) => count - 1)}>-</button>
    </div>
  );
};

export default Button;
