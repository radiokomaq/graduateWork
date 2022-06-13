import React, { useState, useEffect, Component } from 'react';
import Mistake from '../../Modal/Mistake/Mistake';
import stili from './Event.module.css'
import * as axios from 'axios';
import Select from 'react-select'

const Evnt = React.memo((props) => {

  const [appPos, setAppPos] = useState();
  useEffect(() => {
      axios.get('http://test2.ua/index4.php').then((resp) => {
        const allps = resp.data;
        setAppPos(allps);
      });
    });
//   const [otslActivMenu,setOtslActivMenu] = useState(true)
//   const [dayPick, setDayPick] = useState('20.06.22')
// function activeMenu(){
// let e=document.getElementById('body')
// if(otslActivMenu==false){
//   e.className=stili.select_body
//   setOtslActivMenu(!otslActivMenu)
// }else{
//   e.className=stili.select_active
//   setOtslActivMenu(!otslActivMenu)
// }
// }
// function smenaVal(e){
//   setDayPick(e.innerHTML)
// console.log(e.innerHTML);
// }
  return (
    <div className={stili.event}>

        <div className={stili.info}>
           <h1>Приятного просмотра:</h1> 
        </div>
        <div className={stili.film}>
           <img src={props.prokid3}></img>
        </div>
    </div>
    // <div onClick={()=>activeMenu()} className={stili.select} >
    //   <div className={stili.select_header}> 
    //   <span className={stili.select_current}>{valueMenu}</span>
    //         <div className={stili.select_icon}>&times;</div>
    //   </div>

    //   <div id='body' className={stili.select_body}>
    //     <div onClick={e=>smenaVal(e.target)} className={stili.select_item}> Value 1</div>
    //     <div onClick={e=>smenaVal(e.target)} className={stili.select_item}> Value 2</div>
    //     <div onClick={e=>smenaVal(e.target)} className={stili.select_item}> Value 3</div>
    //     <div onClick={e=>smenaVal(e.target)} className={stili.select_item}> Value 4</div>
    //     <div onClick={e=>smenaVal(e.target)} className={stili.select_item}> Value 5</div>
    //   </div>
    // </div>
  )
})
export default Evnt;