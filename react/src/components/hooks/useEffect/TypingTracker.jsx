import React, { useState, useEffect } from 'react';

export const TypingTracker = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Text updated:", text);
  }, [text]); // runs every time `text` changes

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};
