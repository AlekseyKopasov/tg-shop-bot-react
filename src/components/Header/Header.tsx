import React from 'react'
import Button from '../Button/Button'

let tg =  window.Telegram.WebApp

const Header: React.FC = () => {
  const onClose = () => {
    tg.close()
  }

  return (
    <div className={'header'}>
      <Button className={'button'} onClick={onClose}>Закрыть</Button>
      <span className={'username'}>{tg.initDataUnsafe?.user?.username}</span>
    </div>
  )
}

export default Header