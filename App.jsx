import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CCCalc from './Class Components/CCCalc';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        
      </div>
      <h1>Calculator</h1>
      <div className="card">
        <CCCalc />
      </div>
      
    </>
  )
}

export default App
