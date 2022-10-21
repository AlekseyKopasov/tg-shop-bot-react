import React, { useEffect } from 'react'
import './App.css'

let tg =  window.Telegram.WebApp

const App: React.FC = () => {
  useEffect(() => {
    tg.ready()
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      <button onClick={onClose}>Закрыть</button>
    </div>
  )
}

export default App
