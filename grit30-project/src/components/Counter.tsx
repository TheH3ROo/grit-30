import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
      <button onClick={() => setCount(c => Math.max(0, c - 1))}>-1</button>
      <span>Count: {count}</span>
    </div>
  )
}