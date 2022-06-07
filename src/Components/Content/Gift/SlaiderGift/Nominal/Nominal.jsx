import { Button } from 'bootstrap';
import React, { useState } from 'react';
import stili from './Nominal.module.css'
import conteiner from '../../../../../store/conteiner';
import {observer} from "mobx-react-lite";
import Mistake from '../../../../Modal/Mistake/Mistake';

const Nominal = observer((props)=>{
    const[udachPokup,setUdachPokup] = useState(false)
    const [tyt, setTyt] = useState()
    const [active1, setActive] = useState(0)
    var i=0
    const t =() =>{
        setActive(500)
    }
    const t1 =() =>{
        setActive(1000)
    }
    const t2 =() =>{
        setActive(1500)
    }
    const t3 =() =>{
        setActive(3000)
    }
    const t4 =() =>{
        setActive(5000)
    }
console.log(props.prokid);
    function PodarokKard(){
        if(props.prokid==null){
            props.prokid2(true)
        }else{
            
        let response = 0;
    var xhr = new XMLHttpRequest();
    var formElement = new FormData()
    formElement.set('kolv', conteiner.count)
    formElement.set('nominal', active1)
    formElement.set('token', props.prokid)
    xhr.open('POST', 'http://80.87.199.186/kardgt');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          response = JSON.parse(xhr.response);
console.log('ok');
        }
    }
    xhr.send(formElement);
    setUdachPokup(true)
    conteiner.remove_increment()
    setActive(0)
  } 
  
        }
    
    return(

        <div className={stili.nominal}>
            <p>Карты:</p>
                        <div className={stili.nom}>
                    <span  onClick={()=> t()} > 500₽</span>
                    <span onClick={()=> t1()}>1000₽</span>          
                    <span onClick={()=> t2()}>1500₽</span>
                    <span onClick={()=> t3()}>3000₽</span>
                    <span onClick={()=> t4()}>5000₽</span>
                    </div>
                    <div className={stili.knop}>
                    <button onClick={() => conteiner.increment()}>+</button>
                    {"Количество карт ="+ conteiner.count}
                    <button onClick={() => conteiner.decriment()}>-</button>
                    <button onClick={PodarokKard}> {'Купить на '+ active1*conteiner.count}</button>
                    </div>
                    {udachPokup ?
            <Mistake > </Mistake> : ''
        }    
        </div>
    )
}
)
export default Nominal;