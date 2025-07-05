import React, { useState } from "react";

export const Toggle = () => {
  const [light, setLight] = useState(false);

  function toggleLight() {
    setLight((prev) => !prev);
  }

  return (
    <div>
      <button onClick={toggleLight}>SWITCH</button>

      <div
        style={{
          marginTop: "1rem",
          padding: "1rem",
          backgroundColor: light ? "yellow" : "#ccc",
          borderRadius: "10px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        The light is {light ? "ON" : "OFF"}
      </div>
    </div>
  );
};
