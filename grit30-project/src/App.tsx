import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from '@/components/Counter'
import { ThemeToggle } from '@/components/ThemeToggle'

const TITLE = import.meta.env.VITE_APP_TITLE as string
const API_BASE = import.meta.env.VITE_API_BASE as string

function App() {
  return (
    <main className="container">
      <header>
        <h1>{TITLE}</h1>
        <ThemeToggle />
      </header>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <section>
        <p>Vite + React + TS with HMR ✅</p>
        <p>API base from env: <code>{API_BASE}</code></p>
        <Counter />
      </section>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </main>
  )
}

export default App
