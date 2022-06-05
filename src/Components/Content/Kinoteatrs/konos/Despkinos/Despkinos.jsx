import React from 'react';
import stili from './Despkinos.module.css'

const Despkinos =()=>{
    return(
        <div className={stili.despkin}>
            <p> Москва, ул. Автозаводская, 18, ТРЦ «Ривьера»,<br/> 3-й этаж</p>
            <ul>
                <li> <a href='https://yandex.ru/maps/213/moscow/stops/station__9858772/?ll=37.657702%2C55.707299&tab=overview&z=16'><span>Автозаводская</span></a></li>
            </ul>
            <h5> 3 зала</h5>
        </div>
    )
}

export default Despkinos;