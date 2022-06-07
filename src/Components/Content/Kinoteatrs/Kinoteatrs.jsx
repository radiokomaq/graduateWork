import React from 'react';
import stili from './Kinoteatrs.module.css'
import maps from './fotos/maps.png'
import Kinos from './konos/Kinos';


const Mesto_kino = () =>{



    return(
        <div className={stili.ssi}>
            <h2> Кинотеатры Экран</h2>
        <div className={stili.kinoteatrs}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.1928896459704!2d37.678468699999996!3d55.7725217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5357df9337729%3A0x4d68f493b67a5057!2z0JzQtdGC0YDQviDQkdCw0YPQvNCw0L3RgdC60LDRjw!5e0!3m2!1sru!2sru!4v1654589333812!5m2!1sru!2sru"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  {/* <iframe charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A985ade7ae3dc9a590ef5aa85cf209209d63f12f266feec004ff02f0bb00a8a9d&amp;width=785&amp;height=720&amp;lang=ru_RU&amp;scroll=true"></iframe > */}
  <div>
  <Kinos />
  </div>
 
        </div>
        </div>
    )
}
export default Mesto_kino;