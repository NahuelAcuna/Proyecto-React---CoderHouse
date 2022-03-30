import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Text from './Components/Texts/Texts'
import Contador from './Components/Contador/Contador'


function App() {
  const [count, setCount] = useState(1)

  
  return (
    <div className="App">
      <header className="App-header">
      <ItemListContainer>
        <Text firstTitle='Bienvenidos a mi sitio web'/>
        <Text firstText='¡Clickea el contador!'/>
      </ItemListContainer>
      <Contador stock={3}/>
      </header>
    </div>
  )
}

export default App
