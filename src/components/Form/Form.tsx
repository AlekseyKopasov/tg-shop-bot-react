import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import './Form.css'
import { useTelegram } from '../../hooks/useTelegram'

const Form: React.FC = () => {
  const [ country, setCountry ] = useState('')
  const [ street, setStreet ] = useState('')
  const [ subject, setSubject ] = useState('physical')
  const { tg } = useTelegram()

  const onSendData = useCallback(() => {
    const data = { 
      country,
      street,
      subject
    }

    tg.sendData(JSON.stringify(data))
  }, [country, street, subject, tg])

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData)
    return () => {
      tg.offEvent('mainButtonClicked', onSendData)
    }
  }, [onSendData, tg])

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Отправить данные'
    })
  }, [tg])

  useEffect(() => {
    if (!country || !street) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
    }
  }, [tg, country, street])

  const onChangeCountry = (e: ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value)
  }

  const onChangeStreet = (e: ChangeEvent<HTMLInputElement>) => {
    setStreet(e.target.value)
  }

  const onChangeSubject = (e: ChangeEvent<HTMLSelectElement>) => {
    setSubject(e.target.value)
  }

  return (
    <div className={ 'form' }>
      <h3>Введите ваши данные</h3>
      <input
        className={ 'input' }
        type="text"
        placeholder={ 'Страна' }
        value={ country }
        onChange={ onChangeCountry }
      />
      <input
        className={ 'input' }
        type="text"
        placeholder={ 'Улица' }
        value={ street }
        onChange={ onChangeStreet }
      />

      <select
        className={ 'select' }
        value={ subject }
        onChange={ onChangeSubject }
      >
        <option value={ 'physical' }>Физ. лицо</option>
        <option value={ 'legal' }>Юр. лицо</option>
      </select>
    </div>
  )
}

export default Form