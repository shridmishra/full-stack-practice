import React from 'react'

export const UserCard = ({name,age,role}) => {
  return (
    <div>
        <h1>Name:{name}</h1>
        <h1>age:{age}</h1>
        <h1>role:{role}</h1>
    </div>
  )
}
