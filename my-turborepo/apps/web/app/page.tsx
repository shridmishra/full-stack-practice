import React from 'react'
import TextInput from "@repo/ui/text-input"

const Home = () => {
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      background: "black",
      display: "flex",
      justifyContent: "center",
      justifyItems: "center",

    }}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        flexDirection: "column",
      }}>
        <TextInput placeholder="room-name"> </TextInput>
        <button>Join Room</button>

      </div>

    </div>
  )
}

export default Home