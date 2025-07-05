import React, { useEffect, useState } from "react";

export const Fetch = () => {
  const [joke, setJoke] = useState({});

  async function fetchJoke() {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    setJoke(data);
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <p>{joke.setup} - {joke.punchline}</p>
      <button onClick={fetchJoke}>New Joke</button>
    </div>
  );
};
