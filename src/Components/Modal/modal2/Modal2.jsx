import React, { useEffect, useState, useContext} from 'react';
import { useNavigate } from "react-router-dom";
import * as axios from 'axios';
import './Modal2.css'
import logo from '../../Header/ver_nav/left_parts/foto/sakura2_test.png'
import { Context } from '../../../context/context';

const Modal2 = ({ active2, setActive2, prokid, kook, chek}) => {
    const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [emailDirty, setEmailDirty] = useState(false);
const [passwordDirty, setPasswordDirty] = useState(false);
const [emailError, setEmailError] = useState('Емейл не может быть пустым');
const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
const [formValid, setFormValid] = useState(false);


useEffect(() => {
    if (emailError || passwordError) {
        setFormValid(false)
    } else {
        setFormValid(true)
    }
}, [emailError, passwordError])
const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
    if (!re.test(String(e.target.value).toLowerCase())) {
        setEmailError('Некорректный емейл')
    } else {

        setEmailError('')


    }
}
const passwordHolder = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 7 || e.target.value.length > 15) {
        setPasswordError('Пароль не должен быть меньше 7 и длиннее 15 символов!')
        if (!e.target.value) {
            setPasswordError('Пароль не должен быть меньше 7 и длиннее 15 символов!')
        }
    } else {

        setPasswordError('')

        }
}

const blurHandler = (e) => {
    switch (e.target.name) {
        case 'email':
            setEmailDirty(true)
            break
        case 'password':
            setPasswordDirty(true)
            break
    }
}




  function jvtpr(){

            var xhr = new XMLHttpRequest();
            let response = 0
            let formData = new FormData(document.forms.person2);
            xhr.open('POST', 'http://test2.ua/valid_tok'); 

            xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    response = JSON.parse(xhr.response);
                    if(response==1){
                        setPasswordError('Неверный email или пароль!')
                    }else{
                    kook("token",response[0].token, { path: '/' })
                    setTokenData({
                        "email": response[0].email,
                        "name": response[0].name,
                        "phone": response[0].phone,
                        "ostatok": +response[1],
                        "role":response[0].role
                })
                    
                    routeChange()
                    chek(true)
                    setActive2(false)
                    }
                }


            }
            xhr.send(formData);
           
 }

 let navigate = useNavigate(); 
 function routeChange(){ 

   let path = `/Unification`; 
   navigate(path);
 }


const [tokenData, setTokenData]=useContext(Context)
    return (
        <div className={active2 ? "modal2 active" : "modal2"} onClick={() => setActive2(false)}>
            <div className={active2 ? "modal_cont2 active" : "modal_cont2"} onClick={e => e.stopPropagation()}>
                <div className='spaik2'>
                <img src={logo}></img>
                <span> </span>
                <button onClick={() => prokid(true) + setActive2(false)}>Регистрация</button>
                
                </div>
                {/* {':'+ems+ ': '+ps}  */}
                
                <form name='person2' className='form_gr'>
                    <h1>Вход</h1>
                    {(emailDirty && emailError) && <span style={{ color: 'red' }}>{emailError}</span>}
                    <input onChange={e => emailHandler(e)}  value={email} onBlur={e => blurHandler(e)} name='email' type="text" placeholder='Enter your email...' />
                    {(passwordDirty && passwordError) && <span style={{ color: 'red' }}>{passwordError}</span>}
                    <input onChange={e => passwordHolder(e)} value={password} onBlur={e => blurHandler(e)} name='password' type="password" placeholder='Enter your password...' /> 
                        
{/* {userDt.email} */}
                </form>

                <button disabled={!formValid} onClick={()=> jvtpr() } type='submit' >Войти</button> 

            </div>
        </div>
    )
    }

export default Modal2;