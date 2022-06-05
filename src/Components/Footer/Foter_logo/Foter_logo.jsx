import React from 'react';
import stili from './Foter_logo.module.css'
import logo from '../../Header/ver_nav/left_parts/foto/sakura2_test.png'

const Foter_logo = () => {
    return (
        <div className={stili.foterlog}>

                <img className={stili.left} src={logo}></img>


                <img className={stili.rith} src={logo}></img>

        </div>
    )
}

export default Foter_logo;