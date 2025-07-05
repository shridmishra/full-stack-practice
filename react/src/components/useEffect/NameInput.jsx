import React, { useState } from 'react'

export const NameInput = () => {
    const [name , setName ] = useState("")
    function clear(){
        setName("")
    }

  return (
    <div>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
        <button onClick={clear} disabled={!name}>Clear</button>
        <div>Output:{name}</div>
    </div>
  )
}
