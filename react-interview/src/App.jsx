import React from 'react';
import SolutionsList from './solutions/SolutionsList';

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: 'system-ui, sans-serif' }}>
      <h1>React Interview — Exercises (JSX / Vite)</h1>
      <p>
        This small Vite app contains assignment stubs in <code>src/assignments</code> and
        reference solutions in <code>src/solutions</code>.
      </p>
      <SolutionsList />
    </div>
  );
}
