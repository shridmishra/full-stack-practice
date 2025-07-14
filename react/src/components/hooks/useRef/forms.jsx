import React, { useRef, useState } from "react";

export const ControlledForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email, password);
    setEmail("");
    setPassword("");
    setName("");

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button type="submit" disabled={!name || !email || !password}>
        Submit
      </button>
    </form>
  );
};



export const UncontrolledLogin = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleLogin(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(email, password);

    emailRef.current.value = "";
    passwordRef.current.value = "";
    
  }

  return (
    <form onSubmit={handleLogin}>
      <label>Email:</label>
      <input type="email" ref={emailRef} />

      <label>Password:</label>
      <input type="password" ref={passwordRef} />

      <button type="submit">Login</button>
    </form>
  );
};
