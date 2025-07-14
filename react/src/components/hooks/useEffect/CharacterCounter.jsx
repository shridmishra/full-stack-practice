import React, { useState } from "react";

export const CharacterCounter = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        rows={4}
        cols={40}
      />

      <div>Character Count: {text.length}</div>
    </div>
  );
};
