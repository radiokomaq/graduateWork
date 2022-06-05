import React from 'react';
import stili from './Kinos.module.css'
import logEk from '../fotos/revira.jpg'
import Despkinos from './Despkinos/Despkinos';

const Kinos = () => {
    return (
        <div className={stili.kinos}>
            <h2> Экран Парк Ривьера на Автозаводской</h2>
            <div className={stili.krftkins}>
            <img src={logEk}></img>
            <Despkinos />
            </div>
        </div>
    )
}

export default Kinos;