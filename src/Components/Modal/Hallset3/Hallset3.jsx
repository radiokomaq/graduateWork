import React, { useState, useEffect, useContext} from 'react'
import './Hallset3.css'
import * as axios from 'axios';
import {observer} from "mobx-react-lite";
import conteiner from '../../../store/conteiner'
import { Context } from '../../../context/context';

 const Hallset3 =observer((props) =>  {
  const[formVl, setFormVl] = useState(false)
  useEffect(() => {
    if (conteiner.ms.length==0) {
      setFormVl(false)
    } else {
      setFormVl(true)
    }
},)
  function chanceClick(e) {
    if (e.className == "free3") {
      conteiner.dobav(e.innerHTML)
      e.className = "cliked3"
    }else if(e.className == "busy3") {

    }
    else {
      e.className = "free3"
      conteiner.removVe(e.innerHTML)
    }

  }
  const[otpd3, setOtpd3]=useContext(Context);
function blocksit(){
  let response='';
  var xhr = new XMLHttpRequest();
  var formElement = new FormData()
  formElement.set('name', otpd3.name)
  formElement.set('email', otpd3.email)
  formElement.set('block', conteiner.ms)
  formElement.set('dayPick', props.dayPick)
  formElement.set('price', conteiner.ms.length*300)
  formElement.set('title', props.prokid5)
  formElement.set('stathalls', '3')
  xhr.open('POST', 'http://80.87.199.186/busy');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // response = JSON.parse(xhr.response);
// console.log(xhr.response);
      }
  }
  xhr.send(formElement);
  props.prokid2(false)
  props.setMisstake(true)
  conteiner.fullremove()
}
function dul(){
  conteiner.fullremove()
  props.prokid2(false)
}
    return (
      <div className={props.prokid ? "modal3 active" : "modal3"} onClick={() => dul()}>
      <div className={props.prokid ? "modal_cont3 active" : "modal_cont3"} onClick={e => e.stopPropagation()}>
      <img src={props.prokid4} className='ekr'></img>
    <div className='gridlets3'>

      {props.prokid3.map(elem => {
        return (

          <div onClick={e => chanceClick(e.target)} className={elem.status == 1 ? "busy3" : "free3"}>{elem.id}</div>

        )
      })}
      </div>
      <div>
        <h3 className='vibr'>Выбранно:<span>{conteiner.ms}</span></h3>
      </div>
      <span className='itog'> Итоговая цена: {conteiner.ms.length*300 + ' руб;'}</span>
      <button className='bay' disabled={!formVl} onClick={()=>blocksit()}>Забронировать</button>
          </div>
          </div>
    )
  }
 )
export default Hallset3;