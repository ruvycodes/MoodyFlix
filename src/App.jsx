import { useState } from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App
