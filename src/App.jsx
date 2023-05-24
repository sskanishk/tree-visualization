import { useState } from 'react'
import './App.css'
import BinaryTree from './Tree/BinaryTree'

function App() {

  const [inputValue, setInputValue] = useState('')
  const [inputArray, setInputArray] = useState([])


  const handleInputChange = (event) => {
    setInputValue(event?.target?.value)
  }

  const handleDrawButton = () => {
    const isValid = /^\d+(,\d+)*$/.test(inputValue)
    if(!isValid) {
      invalidInputAlert()
      return
    }
    const newArray = inputValue?.split(",")
    if(newArray) {
      setInputArray(() => newArray)
    } else {
      invalidInputAlert()
      return
    }
  }

  const handleClearButton = () => {
    setInputArray([])
    setInputValue('')
  }

  function invalidInputAlert() {
    alert("Invalid Input: Only comma separated integrater is valid")
    setInputValue('')
  }

  return (
    <div>
      <div>
        <h5>Input Array for Binary Tree</h5>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleDrawButton}>Draw</button>
        <button onClick={handleClearButton}>Clear</button>
      </div>
      {
        inputArray.length > 0
          ? <BinaryTree input={inputArray} />
          : <p>No Tree Found!</p>
      }
    </div>
  )
}

export default App
