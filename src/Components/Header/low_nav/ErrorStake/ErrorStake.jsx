import React from 'react'
import stili from './ErrorStake.module.css'

const ErrorStake = () => {
    return (
        <div className={stili.success}>
            <h1> Произошла ошибка</h1>
            <p> Неверно введенный код фильма!</p>
        </div>
    )
}
export default ErrorStake;