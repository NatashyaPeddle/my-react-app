import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterDisplay from './CounterDisplay'
import Footer from './Footer'
import CounterButtons from './CounterButtons'

function App() {
  const [count, setCount] = useState(0)
  const handleIncrement = () => setCount((count) => count + 1);
  const handleDecrement = () => setCount((count) => count - 1);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <CounterDisplay count ={count}/>
      <Footer/>
      <CounterButtons handleIncrement={handleIncrement} count={count} 
      handleDecrement ={handleDecrement}/>
      
      <div>
      <h1>Vite + React</h1>
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
    </>
  )
}

export default App
