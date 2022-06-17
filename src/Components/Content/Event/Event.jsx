import React, { useState, useEffect, Component } from 'react';
import stili from './Event.module.css'


const Evnt = React.memo((props) => {
  return (
    <div className={stili.event}>

        <div className={stili.info}>
           <h1>Приятного просмотра:</h1> 
        </div>
        <div className={stili.film}>
           <img src={props.prokid3}></img>
        </div>
    </div>
  )
})
export default Evnt;