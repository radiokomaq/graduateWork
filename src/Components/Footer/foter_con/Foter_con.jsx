import React from 'react';
import stili from './Foter_con.module.css'

const Foter_con =() =>{
    return(
        <div className={stili.footerCon}>
            <div className={stili.dlend}>
                <ul> <h4>Для гостей</h4>
                    <li><a href='https://sdelaicomp.ru/interesno/mozhno-li-popast-v-kinoteatr-bez-qr-koda.html'>Информация о QR-кодах </a></li>
                    <li><a href='http://60.rospotrebnadzor.ru/content/права-и-обязанности-зрителей-при-посещении-кинотеатров'> Правила в кинотеатре</a></li>
                </ul>
            </div>
            <div className={stili.dlcen}>
                <ul>
                    <h4>Форматы и залы</h4>
                    <li>
                        <a href='https://www.imax.com/ru/content/imax-difference'>
                            Imax
                        </a>
                    </li>
                    <li>
                        <a href='http://fontv.ru/pro-kino/4dx'>
                            4dx
                        </a>
                    </li>
                    <li>
                        <a href='https://www.hi-fi.ru/magazine/audio/dolby-atmos-v-voprosakh-i/'>
                        Dolby Atmos
                        </a>
                    </li>
                    <li>
                        <a href='https://teenage.by/article/chto-takoe-screenx-i-stoit-li-smotret-filmy'>
                        ScreenX
                        </a>
                    </li>
                    
                </ul>
            </div>
            <div>
                <ul>
                   <h4> О нас</h4>
                    <li> Тут почта потом регну
                    </li>
                    <li> 8-968-927-89-30
                    </li>
                    <li> 499-283-29-29
                    </li>
                    <li> https://steamcommunity.com/id/radiokomaq/
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Foter_con;