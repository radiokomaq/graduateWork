import React, { useState, useEffect, useContext } from 'react';
import stili from './TextInfo.module.css'
import * as axios from 'axios';
import Hallset from '../../../../Modal/Hallset/Hallset';
import Mistake from '../../../../Modal/Mistake/Mistake';
import Hallset2 from '../../../../Modal/Hallset2/Hallset2';
import Hallset3 from '../../../../Modal/Hallset3/Hallset3';
import { NavLink } from 'react-router-dom';
import { Context } from '../../../../../context/context';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select'

const TextInfo = React.memo((props) => {

    const [ts, setTs] = useState('')
    const st = (e) => {
        ts(props.prokid.title)
    }

    useEffect(() => {
        const newf = props.prokid.title;
        props.prokid.vibfilm(newf);

    }, [props.prokid.vibfilm]);

    const [misstake, setMisstake] = useState(false)
    const [hallActive, setHallActive] = useState(false)
    const [hallActive2, setHallActive2] = useState(false)
    const [hallActive3, setHallActive3] = useState(false)
    const [allPersons, setAllPersons] = useState([{

    }])
    let navigate20 = useNavigate(); 
    function routeChange20(){ 
      let path2 = `/Unification`; 
      navigate20(path2);
    }
    const[jdfjkdf,setJdfjkdf] = useContext(Context)
    function filmhouse(){
        if (props.prokid.cookies == null) {
            props.prokid.modal(true)
        } else {
            let response=0;
            var xhr = new XMLHttpRequest();
            var formElement = new FormData()
            formElement.set('name', jdfjkdf.name)
            formElement.set('email', jdfjkdf.email)
            formElement.set('title', props.prokid.title)
            formElement.set('token', props.prokid.cookies)
            formElement.set('pos', props.prokid.id)
            xhr.open('POST', 'http://80.87.199.186/filmhouse');
            xhr.onreadystatechange = function() {
              if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                  response = JSON.parse(xhr.response);
                  if(response=='error'){
                    alert('Недостаточно средств, пополните баланс')
                  }else{
                    setJdfjkdf.ostatok(response)                    
                  }
                }
            }
            xhr.send(formElement);
            routeChange20();
        }
        
    }
    function test() {
        if (props.prokid.cookies == null) {
            props.prokid.modal(true)
        } else {
            setHallActive(true)
            let response=[];
            var xhr = new XMLHttpRequest();
            var formElement = new FormData()
            formElement.set('title', props.prokid.title)
            formElement.set('stathalls', '1')
            xhr.open('POST', 'http://80.87.199.186/inithall');
            xhr.onreadystatechange = function() {
              if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                  response = JSON.parse(xhr.response);
                  setAllPersons(response);
                }
            }
            xhr.send(formElement);
        }
    }
    function test2() {
        if (props.prokid.cookies == null) {
            props.prokid.modal(true)
        } else {
            setHallActive2(true)
            let response=[];
            var xhr = new XMLHttpRequest();
            var formElement = new FormData()
            formElement.set('title', props.prokid.title)
            formElement.set('stathalls', '2')
            xhr.open('POST', 'http://80.87.199.186/inithall');
            xhr.onreadystatechange = function() {
              if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                  response = JSON.parse(xhr.response);
                  setAllPersons(response);
                }
            }
            xhr.send(formElement);
        }
    }
    function test3() {
        if (props.prokid.cookies == null) {
            props.prokid.modal(true)
        } else {
            setHallActive3(true)
            let response=[];
            var xhr = new XMLHttpRequest();
            var formElement = new FormData()
            formElement.set('title', props.prokid.title)
            formElement.set('stathalls', '3')
            xhr.open('POST', 'http://80.87.199.186/inithall');
            xhr.onreadystatechange = function() {
              if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                  response = JSON.parse(xhr.response);
                  setAllPersons(response);
                }
            }
            xhr.send(formElement);
        }
    }
    const options = [{
        value:'20.06.22',
        label:'20.06.22'
    },
    {
        value:'21.06.22',
        label:'21.06.22'
    },
    {
        value:'22.06.22',
        label:'22.06.22'
    },
    {
        value:'23.06.22',
        label:'23.06.22'
    },
    {
        value:'24.06.22',
        label:'24.06.22'
    },
    ]
    const [dayPick, setDayPick] = useState('20.06.22')
    
    const getValue =() =>{
        return dayPick ? options.find(c => c.value === dayPick): ''
    }
    const onChange = (newValue) =>{
        setDayPick(newValue.value)
    }

    return (<div>
        <div className={stili.filmTextInfo}>
            <div>
                <h1>{props.prokid.title}</h1>
                <p>{props.prokid.info}</p>
                <p>{props.prokid.age_limit}</p>
                <p>{props.prokid.description}</p>
                <div>
                    <p> Жанр: {props.prokid.genre};</p>
                    <p>Режиссер: {props.prokid.dir}; </p>
                    <p>Актеры: {props.prokid.actor};</p>
                </div>

            </div>
            <div className={stili.vniz}>
            {/* <a href={props.prokid.knopurl}> */}
            {props.prokid.knopurl == 'http://localhost:3000/Event' ?
            <div className={stili.shema}>
                <div className={stili.podrknop}> 
                <button onClick={()=> filmhouse()}>Купить фильм</button> 
                </div>
                <div className={stili.podr}>
                <NavLink to='/detalic'> Подробнее</NavLink>
                </div>
                </div>
                :
                // <button onClick={() => test() }>Купить билет</button>
                <div>
                    <h2 className={stili.rasp}> Сеансы <Select onChange={onChange} value={getValue()} options={options} /></h2>
                    <h3 className={stili.dwod} >2D</h3>
                    <div className={stili.pokup}>

                        <div className={stili.vremyapokup}>

                            <span className={stili.time} onClick={() => test()}>{dayPick=='20.06.22'? <span>21:00</span> : dayPick=='21.06.22'? <span>20:00</span>:dayPick=='22.06.22'? <span>19:00</span>:dayPick=='23.06.22'? <span>18:00</span>:<span>17:00</span>}</span>
                            <span className={stili.price}> от 2500₽</span>
                            <span className={stili.price}> зал 1</span>
                            <span className={stili.price}> VIP зал</span>
                        </div>
                        <div className={stili.vremyapokup}>

                            <span className={stili.time} onClick={() => test2()}> 23:30</span>
                            <span className={stili.price}> от 500₽</span>
                            <span className={stili.price}> зал 2</span>
                            <span className={stili.price}> Стандарт</span>
                        </div>
                        <div className={stili.vremyapokup}>

                            <span className={stili.time} onClick={() => test3()}> 00:15</span>
                            <span className={stili.price}> от 300₽</span>
                            <span className={stili.price}> зал 3</span>
                            <span className={stili.price}> Эконом</span>
                        </div>
                    </div>
                </div>
            }
            </div>
        </div>
        <Hallset prokid={hallActive} prokid2={setHallActive} prokid3={allPersons} prokid4={props.prokid.avatar} prokid5={props.prokid.title} setMisstake={setMisstake} />
        <Hallset2 prokid={hallActive2} prokid2={setHallActive2} prokid3={allPersons} prokid4={props.prokid.avatar} prokid5={props.prokid.title} setMisstake={setMisstake} />
        <Hallset3 prokid={hallActive3} prokid2={setHallActive3} prokid3={allPersons} prokid4={props.prokid.avatar} prokid5={props.prokid.title} setMisstake={setMisstake} />
        {misstake ?
            <Mistake > </Mistake> : ''
        }
        {/* </a> */}
        {/* </a> */}
        {/* <button onClick={()=> test() + alert('1')}>Тестим рас два</button> */}
        {/* <a href='http://test2.ua/ajzap/'> ggggg</a> */}
        {/* {props.prokid.prosm} */}
    </div>
    )
});

export default TextInfo;