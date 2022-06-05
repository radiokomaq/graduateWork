import React, { useContext, useEffect, useState } from 'react';
import stili from './LichDann.module.css'
import ava from  './ava/avatar.png'
import { Context } from '../../../../../../context/context';


const LichDann = (props) =>{
const [lc1, setLc1] = useContext(Context)
    function handleRemoveCookie(){
        props.remove('user');
        props.remove('email');
        props.remove('token');
        props.chek(false)
      }
    return(
        <div className={stili.dann}>
                <h1> Личные данные </h1>
  <img src={ava}></img>
  <h3> Имя</h3>
  <p> {lc1.name}</p>
  <a href='/Films'>
  <button onClick={handleRemoveCookie}>Выйти</button>
  </a>
  {lc1.role=='admin'?
  <button onClick={()=>props.setAdminValid(!props.adminValid)}>admin</button>:
  ''}
        </div>
    )
}

export default LichDann;