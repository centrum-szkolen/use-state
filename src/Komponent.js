import React, { useState } from 'react'

const Komponent = () => {

  const [checked, setChecked] = useState(false);

  console.log("Komponent - rerender");

  const handleClick = () => setChecked(!checked)

  return (
    <div>
        <p>Komponent {checked ? 'Zaznaczono' : 'Nie zaznaczono'}</p>
        <button onClick={handleClick}>{checked ? 'Odznacz' : 'Zaznacz'}</button>
    </div>
  )
}

export default Komponent