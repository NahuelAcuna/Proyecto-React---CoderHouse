import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Text from './Components/Texts/Texts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <Text firstTitle='Bienvenidos a mi sitio web'/>
        <Text firstText='¡Clickea el contador!'/>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
