import React from 'react'

interface Props {
    placeholder: string
}

const TextInput = ({placeholder}:Props) => {
  return (
   <input type="text"  placeholder={placeholder} >
   </input>
  )
}

export default TextInput
