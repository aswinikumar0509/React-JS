import { useState } from "react"


function App() {
  // const [count, setCount] = useState(0)
  const [color , setColor] = useState()

  return (
    <div className="w-full h-screen duration-200"
    style = {{backgroundColor : color}}>

      <h1 className="flex flex-wrap justify-center bg-white px-3 py-2 rounded-3xl grid-center">Hello , bgChanger Project</h1>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
      <button
      onClick={()=>setColor("red")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{background:"red"}}>Red
      </button>
      <button
      onClick={()=>setColor("yellow")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{background:"red"}}>Yellow
      </button>
      <button
      onClick={()=>setColor("white")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{background:"red"}}>White
      </button>
      <button
      onClick={()=>setColor("green")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{background:"red"}}>Green
      </button>
      <button
      onClick={()=>setColor("blue")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{background:"red"}}>Blue
      </button>
      <button
      onClick={()=>setColor("black")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{background:"red"}}>Black
      </button>
      <button
      onClick={()=>setColor("orange")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{background:"red"}}>Orange
      </button>
      </div>
      </div>
    </div>
  )
}

export default App
