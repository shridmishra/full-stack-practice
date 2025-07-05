import React, { useState } from 'react'

export const ToggleTwo = () => {
    const [visible,setVisible] = useState(false);

  return (
    <>
        <button onClick={()=>setVisible(!visible)}>{visible ? "hide" : "show"}</button>
        {visible && <p>hello ji</p>}
    </>
  )
}
