import React from 'react'
import Button from '../Button/Button'
import '../Button/Button.css'
import '../Header/Header.css'
import { useTelegram } from '../../hooks/useTelegram'

const Header: React.FC = () => {
  const {onClose, user} = useTelegram()

  return (
    <div className={'header'}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={'username'}>{user?.username}</span>
    </div>
  )
}

export default Header