import React from 'react'
import Button from '../Button/Button'
import '../Button/Button.css'
import '../Header/Header.css'

let tg =  window.Telegram.WebApp

const Header: React.FC = () => {
  const onClose = () => {
    tg.close()
  }

  return (
    <div className={'header'}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={'username'}>{tg.initDataUnsafe?.user?.username}</span>
    </div>
  )
}

export default Header