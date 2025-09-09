import { useEffect, useState } from 'react'

function detectInitialDark(): boolean {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark') return true
  if (saved === 'light') return false
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
}

export function ThemeToggle() {
  const [dark, setDark] = useState(detectInitialDark)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <button onClick={() => setDark(d => !d)}>
      {dark ? 'Switch to light' : 'Switch to dark'}
    </button>
  )
}