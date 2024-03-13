import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [Counter , setCounter]=useState(0)

  // let Counter = 15;

  const addValue = () =>{
    // console.log("Clicked" , Counter);
    Counter = Counter+1
    setCounter(Counter)
    // console.log("value added",Math.random());
  }

  const removeValue = () =>{
    setCounter(Counter-1)

  }
  
  return (
    <>
    <h1>Counter App React</h1>
    <h2>Counter Value : {Counter}</h2>

    <button
    onClick={addValue}
    >Add Value</button>

    {/* <br /> */}

    <button
    onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
