import React from 'react';
import stili from './InfoGift.module.css'
import gift from '../SlaiderGift/fotosslaid/podarok.png'

const InfoGift = () => {
    return (
        <div className={stili.giftinfo}>
            <div className={stili.giftinfo1}>
        <ul>
            <h1> Киноподарок для киномана</h1>
           <h3> Настоящим любителям кино не дарят носки и конфеты</h3>
           
            <li>Выбери номинал и количество подарочных карт</li>
            <li>Реши кого порадуешь<br/>- себя или друга</li>
            <li>Оплати онлайн и киноподарок придет <br/>в личный кабинет</li>
        </ul>
            </div>
            <div>
            <img src={gift}></img>
            </div>
        </div>
    )
}

export default InfoGift;