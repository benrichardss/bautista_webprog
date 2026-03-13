import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
        <p>
          Name: Aron Gabriel C. Bautista<br/>
          Email: bautistaac2@students.national-u.edu.ph<br/>
          Other Personal Info: <a href='https://github.com/benrichardss/bautista_webprog.git'>https://github.com/benrichardss/bautista_webprog.git</a>
        </p>
      </header>
    </div>
  )
}

export default App
