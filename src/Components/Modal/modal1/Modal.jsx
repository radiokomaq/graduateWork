import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Modal.css'
import logo from '../../Header/ver_nav/left_parts/foto/sakura2_test.png'

const Modal = ({ active, setActive, prokid, email,setEmail,password,setPassword, name, setName}) => {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [name, setName] = useState('')
    const [phone,setPhone]= useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [nameDirty, setNameDirty] = useState(false)
    const [phoneDirty, setPhoneDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Емейл не может быть пустым')
    const [nameError, setNameError] = useState('Имя не может быть пустым')
    const [phoneError, setPhoneError] = useState('Поле телефона не может быть пустым')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
    const [formValid, setFormValid] = useState(false)


    useEffect(() => {
        if (emailError || passwordError || nameError || phoneError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])
    let j=0;
    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный емейл')
        } else {
            
            setEmailError('')

    }
}
    

    const nameHandler = (e) =>{
        setName(e.target.value)

        if (e.target.value.length<2) {
            setNameError('Имя не должен быть меньше 1 символов!')
        }
     else {
        setNameError('')
    }
    }

   const phoneHandler =(e)=>{
       setPhone(e.target.value)
       if((e.target.value.length<12) || (e.target.value.length>12)){
                  if(!/^\+\d*$/.test(e.target.value)){
       setPhone('+7')
              if(!/\d/.test(e.target.value)){
       e.target.value.preventDefault();
              }
                  }
        setPhoneError('Неизвестный регион номера!')
       }else{
        setPhoneError('')
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
                case 'phone':
                    setPhoneDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
            case 'name':
                setNameDirty(true)
                break
        }
    }
    // const submit = () => {
    //     axios({
    //       method: 'POST',
    //       url: 'http://test2.ua/index3.php',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       data: {
    //         email,
    //         password
    //       }
    //     })
    //     .then((response) => {
    //       console.log(response)
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
    //   }

    // useEffect(()=>{
    //     var send_text = 'ROMAN PETUSHARA';
    //     var xhr = new XMLHttpRequest();
    //     var body = 'text=' + encodeURIComponent(send_text);
    //     xhr.open('POST', 'http://test2.ua/index3.php');
    //     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //     xhr.onreadystatechange = function() {
    //         if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    //         console.log(xhr.responseText);
    //         }
    //     }
    //     xhr.send(body);
    // },[Clicked])
const oprt=()=>{
        var xhr = new XMLHttpRequest();
        let response = 0
        let formData = new FormData(document.forms.person);
        xhr.open('POST', 'http://80.87.199.186/userdata');
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                response = JSON.parse(xhr.response);
                if(response==1){
                    // alert('Ошибка')                    
            setEmailError('Такой email уже сущевствует!')
                }else{
                    setName('')
                    setPhone('')
                    setEmail('')
                    setPassword('')
                    setPasswordDirty(false)
                }
            }
            
        }
        xhr.send(formData);
    }

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            
            <div className={active ? "modal_cont active" : "modal_cont"} onClick={e => e.stopPropagation()}>
                <div className='spaik'>
            <button onClick={()=> prokid(true) + setActive(false)}> вход</button>
            <span></span>
            <img src={logo}></img>
            </div>
                <form name='person' className='form_gr'>
                
                    <h1>Регистрация</h1>
                    {(nameDirty && nameError) && <span style={{ color: 'red' }}>{nameError}</span>}
                    <input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} name='name' type="text" placeholder='Enter your name...'></input>
                    {(phoneDirty && phoneError) && <span style={{ color: 'red' }}>{phoneError}</span>}
                    <input onChange={e => phoneHandler(e)} value={phone} onBlur={e => blurHandler(e)} name='phone' type="tel" placeholder='Enter your mobile phone...'></input>
                    {(emailDirty && emailError) && <span style={{ color: 'red'  }}>{emailError}</span>}
                    <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email' type="text" placeholder='Enter your email...' />
                    {(passwordDirty && passwordError) && <span style={{ color: 'red' }}>{passwordError}</span>}
                    <input onChange={e => passwordHolder(e)} value={password} onBlur={e => blurHandler(e)} name='password' type="password" placeholder='Enter your password...' />
                    
                </form>
                <div>
                <button disabled={!formValid} type='submit' onClick={()=>oprt()}>Registration</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;