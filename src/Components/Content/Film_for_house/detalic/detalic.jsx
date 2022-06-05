import React from 'react'
import stili from './detalic.module.css'
import detal1 from './fotoDetalic/kino_doma.jpg'
import detal2 from './fotoDetalic/last.jpg'

const Detalic = () => {
  return (
      <div className={stili.detalic}>
          <h1> Создать свой собственный показ очень просто!</h1>
    <img src={detal1}></img>
    <img src={detal2}></img>
    </div>
  )
}
export default Detalic;