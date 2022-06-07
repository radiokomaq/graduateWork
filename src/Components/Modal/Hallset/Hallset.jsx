import React, { useState, useEffect, useContext} from 'react'
import './Hallse.css'
import * as axios from 'axios';
import {observer} from "mobx-react-lite";
import conteiner from '../../../store/conteiner'
import Mistake from '../Mistake/Mistake';
import { Context } from '../../../context/context';

const Hallset = observer((props) => {

  const [vIbOr, setVIbOr] = useState([
  ])
  const[formVl, setFormVl] = useState(false)
  useEffect(() => {
    if (conteiner.ms.length==0) {
      setFormVl(false)
    } else {
      setFormVl(true)
    }
},)
  function chanceClick(e) {
    if (e.className == "free") {
      conteiner.dobav(e.innerHTML)
      e.className = "cliked"
    }else if(e.className == "busy") {

    }
    else {
      e.className = "free"
      conteiner.removVe(e.innerHTML)
    }

  }
  const[otpd, setOtpd]=useContext(Context);
  
function blocksit(){
  let response='';
  var xhr = new XMLHttpRequest();
  var formElement = new FormData()
  formElement.set('name', otpd.name)
  formElement.set('email', otpd.email)
  formElement.set('block', conteiner.ms)
  formElement.set('title', props.prokid5)
  formElement.set('stathalls', '1')
  xhr.open('POST', 'http://80.87.199.186/busy');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//         response = JSON.parse(xhr.response);
// console.log(response);
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
    <div className={props.prokid ? "modal5 active" : "modal5"} onClick={() => dul()}>
    <div className={props.prokid ? "modal_cont5 active" : "modal_cont5"} onClick={e => e.stopPropagation()}>


<img src={props.prokid4} className='ekr'></img>
    <div className='gridlets'>

      {props.prokid3.map(elem => {
        return (

          <div onClick={e => chanceClick(e.target)} className={elem.status == 1 ? "busy" : "free"}>{elem.id}</div>

        )
      })}
      </div>
      <div>
        <h3 className='vibr'>Выбранно:<span>{conteiner.ms}</span></h3>
      </div>
      <span className='igoto'> Итоговая цена: {conteiner.ms.length*3000 + ' руб;'}</span>
      <button className='bay' disabled={!formVl} onClick={()=>blocksit()}> Купить</button>
    </div>


      </div>

  )
}
)
export default Hallset;