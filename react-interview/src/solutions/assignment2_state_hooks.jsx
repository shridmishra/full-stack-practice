import React, { useState, useReducer } from 'react';

// 1. Counter using useState
export default function Counter({ initial = 0 }) {
  const [n, setN] = useState(initial);
  return (
    <div>
      <button onClick={() => setN((x) => x - 1)}>-</button>
      <span style={{ margin: '0 8px' }}>{n}</span>
      <button onClick={() => setN((x) => x + 1)}>+</button>
    </div>
  );
}

// 2. TodoReducer using useReducer
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: Date.now(), text: action.text, done: false }];
    case 'TOGGLE':
      return state.map((t) => (t.id === action.id ? { ...t, done: !t.done } : t));
    case 'DELETE':
      return state.filter((t) => t.id !== action.id);
    default:
      return state;
  }
};

export function TodoReducer() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState('');
  const add = () => {
    if (input.trim()) {
      dispatch({ type: 'ADD', text: input });
      setInput('');
    }
  };
  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add todo" />
      <button onClick={add}>Add</button>
      <ul>
        {todos.map((t) => (
          <li key={t.id} style={{ textDecoration: t.done ? 'line-through' : 'none' }}>
            {t.text}
            <button onClick={() => dispatch({ type: 'TOGGLE', id: t.id })}>Toggle</button>
            <button onClick={() => dispatch({ type: 'DELETE', id: t.id })}>Del</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 3. ControlledForm with validation
export function ControlledForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = 'Name required';
    if (!email.includes('@')) errs.email = 'Invalid email';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Submitted: ${name} / ${email}`);
      setName('');
      setEmail('');
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 300 }}>
      <label>
        Name:
        <input value={name} onChange={(e) => setName(e.target.value)} />
        {errors.name && <div style={{ color: 'red', fontSize: 12 }}>{errors.name}</div>}
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <div style={{ color: 'red', fontSize: 12 }}>{errors.email}</div>}
      </label>
      <button type="submit"> Submit</button>
    </form>
  );
}

