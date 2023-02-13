import React, { useState } from 'react'

const DoubleCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(prev => prev+1);
    setCounter(prev => prev+1);
    //setCounter(counter + 1);
  }

  return (
    <div>
        <h4>Podwójny licznik: {counter}</h4>
        <button onClick={handleClick}>Double increase</button>
    </div>
  )
}

export default DoubleCounter;