import React, { useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'

let tg =  window.Telegram.WebApp

const App: React.FC = () => {
  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className="App">
      <Header />
    </div>
  )
}

export default App
