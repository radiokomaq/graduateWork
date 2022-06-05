import React, { useContext, useState } from 'react';
import stili from './Kontakt.module.css'
import { Context } from '../../../../../../context/context';

const Kontakt = (props) =>{
    const [lc, setLc]= useContext(Context)
    return(
        <div className={stili.kont}>
        <div className={stili.kont1}>
            <ul>
                <h3>
                    Контакты
                </h3>
                <div className={stili.kontop}>
                <li>email </li>
                <span>  {lc.email}</span>
                <li> телефон </li>

                <span> {lc.phone}</span>
                </div>
            </ul>
        </div>
        <div className={stili.kont2}>
            <div className={stili.dvig}>
            <h3>
                Хочу быть в курсе
            </h3>
            <p> Узнавай о новинках кино и специальных предложениях самым первым! Еженедельно мы сообщаем о новинках кинопроката, эксклюзивных показах, скидках и акциях.</p>
            <div className={stili.kontop}>
            <input type="checkbox"></input>
            <span>  Получать email-сообщения</span>
            <input type="checkbox"></input>
            
            <span>  Получать sms</span>
            </div>
            </div>
        </div>
        <div className={stili.kont3}> 
            <h4> Моя Кинокарта</h4>
            <p> {'Остаток на карте: ' + lc.ostatok+' руб.'}</p>
        </div>
        </div>
    )
}

export default Kontakt;