import React, { useState } from "react";

const Field = () => {
  const [user, setUser] = useState("");
  const [field, setField] = useState("");

  const handleChange = (e) => {
    setField(e.target.value);
  };
  const handleClick = () => {
    setUser(field);
    setField("");
  };

  return (
    <div>
      <h3>Użytkownik to: {user}</h3>
      <input value={field} type="text" onChange={handleChange} />
      <button onClick={handleClick}>Aktualizuj</button>
      {/* <button onClick={() => setUser(field)}>Aktualizuj</button> */}
    </div>
  );
};

export default Field;
