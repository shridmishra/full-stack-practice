import React, { useState } from "react";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`email:${email}`, `password:${password}`);
    setEmail("");
    setPassword("");
  }

  return (
    <div style={{display: "flex", flexDirection: "column",}}>
      <p>Email:</p>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <p>Password</p>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmit} disabled={!password && !email}></button>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" disabled={!email || !password}>
          Login
        </button>
      </form>
    </div>
  );
};
