import { Button } from 'bootstrap';
import React, { useState } from 'react';
import stili from './Nominal.module.css'
import conteiner from '../../../../../store/conteiner';
import { observer } from "mobx-react-lite";
import Mistake from '../../../../Modal/Mistake/Mistake';

const Nominal = observer((props) => {
    const [udachPokup, setUdachPokup] = useState(false)
    const [tyt, setTyt] = useState()
    const [active1, setActive] = useState(0)
    var i = 0
    const t = (e) => {
        // setActive(500)
        setActive(e.innerHTML)
    }
    console.log(props.prokid);
    function PodarokKard() {
        if (props.prokid == null) {
            props.prokid2(true)
        } else {

            let response = 0;
            var xhr = new XMLHttpRequest();
            var formElement = new FormData()
            formElement.set('kolv', conteiner.count)
            formElement.set('nominal', active1)
            formElement.set('token', props.prokid)
            xhr.open('POST', 'http://80.87.199.186/kardgt');
            xhr.onreadystatechange = function () {
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
    const masssss =[500,1000,1500,3000,5000];
    
    return (

        <div className={stili.nominal}>
            <p>Карты:</p>
            <div className={stili.nom}>
                {masssss.map(elem => 
                {
                  return  <span onClick={(e) => t(e.target)}> {elem}</span>
                
                }
                )}
                
            </div>
            <div className={stili.knop}>
                <button onClick={() => conteiner.increment()}>+</button>
                <b>{"Количество карт =" + conteiner.count}</b>
                <button onClick={() => conteiner.decriment()}>-</button>
                <button onClick={PodarokKard}> {'Купить на ' + active1 * conteiner.count}</button>
            </div>
            {udachPokup ?
                <Mistake > </Mistake> : ''
            }
        </div>
    )
})

export default Nominal;
