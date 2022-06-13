import React, { useContext } from 'react';
import stili from './Mistake.module.css'
import { Context } from '../../../context/context'

const Mistake = () => {
  const [missContext, setMissContext] = useContext(Context)
  return (
    <div className={stili.success}>
      <h2> Спасибо за покупку, {missContext.name}!</h2>
      <p>Вся информация была отправленна на почту: <b>{missContext.email}</b></p>
    </div>
  )
}
export default Mistake;