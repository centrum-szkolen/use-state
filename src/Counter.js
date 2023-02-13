import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleClickIncrease = () => setCounter(counter + 1);
  const handleClickDecrease = () => setCounter(counter - 1);

  console.log("Counter - rerender");

  return (
    <div>
      <h2>Licznik: {counter}</h2>
      <button onClick={handleClickIncrease}>Zwiększ</button>
      <button onClick={handleClickDecrease}>Zmniejsz</button>
    </div>
  );
};

export default Counter;
