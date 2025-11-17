import React from 'react';

const solutions = [
  { title: 'Components, Props & Composition', file: '/src/solutions/assignment1_components_basics.jsx' },
  { title: 'State, Reducer & Forms', file: '/src/solutions/assignment2_state_hooks.jsx' },
  { title: 'Effects, Data Fetching & Custom Hooks', file: '/src/solutions/assignment3_effects.jsx' },
  { title: 'Context, Custom Hooks & Advanced Patterns', file: '/src/solutions/assignment4_context.jsx' },
  { title: 'Refs, Performance & Optimization', file: '/src/solutions/assignment5_refs.jsx' },
];

export default function SolutionsList() {
  return (
    <div>
      <h2>Assignments (5 Topics)</h2>
      <p>Each assignment covers multiple React concepts. Check the assignment files and docs in <code>src/assignments/</code>.</p>
      <ul>
        {solutions.map((s) => (
          <li key={s.title}>
            <strong>{s.title}</strong> — <code>{s.file}</code>
          </li>
        ))}
      </ul>
    </div>
  );
}

