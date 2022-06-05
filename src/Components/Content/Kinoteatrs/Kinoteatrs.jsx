import React from 'react';
import stili from './Kinoteatrs.module.css'
import maps from './fotos/maps.png'
import Kinos from './konos/Kinos';


const Mesto_kino = () =>{



    return(
        <div className={stili.ssi}>
            <h2> Кинотеатры Экран</h2>
        <div className={stili.kinoteatrs}>
  <img src={maps}></img>
  {/* <iframe charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A985ade7ae3dc9a590ef5aa85cf209209d63f12f266feec004ff02f0bb00a8a9d&amp;width=785&amp;height=720&amp;lang=ru_RU&amp;scroll=true"></iframe > */}
  <div>
  <Kinos />
  </div>
 
        </div>
        </div>
    )
}
export default Mesto_kino;