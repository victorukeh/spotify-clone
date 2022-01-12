import React from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login'
import Player from './Player'
import './App.css'

const code = new URLSearchParams(window.location.search).get('code')
function App() {
  return (
    // <Router>
      <div className='app'>{code ? <Player code={code} /> : <Login />}</div>
    // </Router>
  )
}

export default App
