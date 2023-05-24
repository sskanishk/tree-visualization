import { useState } from 'react'
import './App.css'
import Tree from './Tree'

function App() {

  return (
    <div>
      <Tree input={[4,2,6,1,3,5,7]}/>
    </div>
  )
}

export default App
