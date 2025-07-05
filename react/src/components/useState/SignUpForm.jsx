import React, { useState } from "react";

export const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setEmail("");
    setPassword("");
    setUsername("");
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "gray",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          width: "100%",
          maxWidth: "400px",
          padding: "2rem",
        }}
      >
        <label>Username</label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <label>Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        {!email && <p style={{ color: "red" }}>Email is required</p>}

        <label>Password</label>
        <input
          type="password"
          minLength={6}
          onChange={(e) => setPassword(e.target.value)}
        />
        {password.length > 0 && password.length < 6 && (
          <p style={{ color: "red" }}>Password must be at least 6 characters</p>
        )}

        <button type="submit" disabled={!email || !password || !username}>
          Submit
        </button>
      </form>
    </div>
  );
};
