import React from 'react';
import stili from './Soth_seti.module.css'
import telega from './fotos/tg_s_fonom.jpg'
import inst from './fotos/inst_s_fonom.jpg'
import vk from './fotos/vk_oval.png'

const Soth_seti = () => {
    return (
        <div className={stili.seti}>
            <a href='https://vk.com/radiokomaq'>
            <img className={stili.vk} src={vk}></img>
            </a>
            <a href='https://www.instagram.com/gumanitariysergo/'>
            <img className={stili.inst} src={inst}></img>
            </a>
            <a href='https://t.me/radiokomaq'>
            <img className={stili.telega} src={telega}></img>
            </a>
            {/* <a href='#1'> ТЕЛЕГРАММ</a> */}
        </div>
    )
}
export default Soth_seti;