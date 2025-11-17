import React from 'react';

// 1. Basic greeting component
export default function Greeting({ name = 'Friend' }) {
  return <h2>Hello, {name}!</h2>;
}

// 2. Card component demonstrating children prop
export function Card({ title, children }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: 16, margin: 8, borderRadius: 4 }}>
      {title && <h3 style={{ marginTop: 0 }}>{title}</h3>}
      <div>{children}</div>
    </div>
  );
}

// 3. Layout demonstrating composition
export function Layout() {
  return (
    <div>
      <Card title="Welcome">
        <Greeting name="Alice" />
        <p>This demonstrates component composition using children and props.</p>
      </Card>
      <Card title="Another Section">
        <p>Cards can contain any content, avoiding prop drilling for layout.</p>
      </Card>
    </div>
  );
}

