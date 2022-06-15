import React, { useEffect, useState, useContext} from 'react';
import { useNavigate } from "react-router-dom";
import * as axios from 'axios';
import './Modal2.css'
import logo from '../../Header/ver_nav/left_parts/foto/sakura2_test.png'
import { Context } from '../../../context/context';

const Modal2 = ({ active2, setActive2, prokid, kook, chek, setBasketFilm, setBasketFilmKod}) => {
    const [email2, setEmail2] = useState('');
const [password2, setPassword2] = useState('');
const [emailDirty2, setEmailDirty2] = useState(false);
const [passwordDirty2, setPasswordDirty2] = useState(false);
const [emailError2, setEmailError2] = useState('Емейл не может быть пустым');
const [passwordError2, setPasswordError2] = useState('Пароль не может быть пустым');
const [formValid2, setFormValid2] = useState(false);


useEffect(() => {
    if (emailError2 || passwordError2) {
        setFormValid2(false)
    } else {
        setFormValid2(true)
    }
}, [emailError2, passwordError2])
const emailHandler = (e) => {
    setEmail2(e.target.value)
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
    if (!re.test(String(e.target.value).toLowerCase())) {
        setEmailError2('Некорректный емейл')
    } else {

        setEmailError2('')


    }
}
const passwordHolder = (e) => {
    setPassword2(e.target.value)
    if (e.target.value.length < 7 || e.target.value.length > 15) {
        setPasswordError2('Пароль не должен быть меньше 7 и длиннее 15 символов!')
        if (!e.target.value) {
            setPasswordError2('Пароль не должен быть меньше 7 и длиннее 15 символов!')
        }
    } else {

        setPasswordError2('')

        }
}

const blurHandler = (e) => {
    switch (e.target.name) {
        case 'email':
            setEmailDirty2(true)
            break
        case 'password':
            setPasswordDirty2(true)
            break
    }
}




  function jvtpr(){

            var xhr = new XMLHttpRequest();
            let response = 0
            let viufu =[]
            let viufu2=[]
            let formData = new FormData(document.forms.person2);
            xhr.open('POST', 'http://80.87.199.186/valid_tok'); 

            xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    response = JSON.parse(xhr.response);
                    for (let i = 2; i < response.length; i++) {
                        // viufu.push(response[i].title)
                        viufu=[...viufu,response[i].title]
                        viufu2=[...viufu2,response[i].pos]
                      }
                    if(response==1){
                        setPasswordError2('Неверный email или пароль!')
                    }else{
                    kook("token",response[0].token, { path: '/' })
                    setTokenData({
                        "email": response[0].email,
                        "name": response[0].name,
                        "phone": response[0].phone,
                        "ostatok": +response[1],
                        "role":response[0].role
                })
                setBasketFilm(viufu)
                setBasketFilmKod(viufu2)
                    
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
                    {(emailDirty2 && emailError2) && <span style={{ color: 'red' }}>{emailError2}</span>}
                    <input onChange={e => emailHandler(e)}  value={email2} onBlur={e => blurHandler(e)} name='email' type="text" placeholder='Enter your email...' />
                    {(passwordDirty2 && passwordError2) && <span style={{ color: 'red' }}>{passwordError2}</span>}
                    <input onChange={e => passwordHolder(e)} value={password2} onBlur={e => blurHandler(e)} name='password' type="password" placeholder='Enter your password...' /> 
                        
{/* {userDt.email} */}
                </form>

                <button disabled={!formValid2} onClick={()=> jvtpr() } type='submit' >Войти</button> 

            </div>
        </div>
    )
    }

export default Modal2;