import React from 'react'

export const LoginStatus = ({isLoggedIn}) => {
  return (
    <div>
        {isLoggedIn ?<h1>"welcome"</h1>:<h1>loginPlease</h1>}
        <h1>{isLoggedIn ? "Welcome" : "Please login"}</h1>

    </div>
  )
}
