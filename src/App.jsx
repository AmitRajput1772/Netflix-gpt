import { useState } from 'react'
import React from 'react'
import Body from './components/Body'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Body/>
    </div>
  )
}

export default App
