import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Chai from "./chai.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(
  // fragnment -> put the component in the fragnment

  <React.StrictMode>
    <Chai />
    <h1>Chai or react</h1>
  </React.StrictMode>,
)
