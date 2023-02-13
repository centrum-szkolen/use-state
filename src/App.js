import React, { useState } from "react";
import Counter from "./Counter";
import DoubleCounter from "./DoubleCounter";
import Field from "./Field";
import Komponent from "./Komponent";
import Password from "./Password";

const App = () => {
  const [user, setUser] = useState({
    firstname:"Jan",
    lastname:"Kowalski"
  });
  const [languages, setLanguages] = useState(["Javascript","PHP","C#","Python"]);

  console.log("App - rerender");

  return (
    <div >
         <h1>Witaj {user.firstname} {user.lastname}</h1>
         <Counter/>
         <Counter/>
         <Komponent/>
         <Komponent/>
         <Komponent/>
         <DoubleCounter/>
         <Field/>
         <Password/>
         {languages.map((language,index) => <p key={index}>{language}</p>)}
    </div>
  );
};

export default App;
