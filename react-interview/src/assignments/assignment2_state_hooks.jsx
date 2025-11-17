import React from 'react';

/**
 * Assignment 2 — State, Reducer & Forms
 *
 * Implement:
 * - Counter (useState-based)
 * - TodoReducer (useReducer-based todo list)
 * - ControlledForm (name + email with validation)
 */

export default function Counter({initial = 0}) {
  const [n , setN ] = React.useState(initial);
  return (
    <div>
      <button onClick={()=> setN(n + 1 )}>+</button>
      <button onClick={()=> setN(n - 1 )}>-</button>
      <span>{n}</span>
    </div>
  )
  
}

export function TodoReducer(/* no props */) {
  const 
}

export function ControlledForm(/* no props */) {
  
}
