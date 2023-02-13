import React, { useState } from 'react'

const Password = () => {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  console.log(password);

  return (
    <div>
        <input onChange={(e)=>setPassword(e.target.value)} type={visible ? 'text' : 'password'}/>
        <button onClick={()=>setVisible(!visible)}>Pokaż hasło</button>
    </div>
  )
}

export default Password