import React, { useEffect } from 'react';
import { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { NavLink, useNavigate } from 'react-router-dom';
import ErrorStake from './ErrorStake/ErrorStake';
import stili from './niz_nav.module.css'


const Niz_nav = React.memo((props) => {

    let navigate6 = useNavigate(); 
    function routeChange33(){ 
      let path4 = `/Films`; 
      navigate6(path4);
    }
const [errorPokaz,setErrorPokaz] = useState(false)
    function prms(){
        setErrorPokaz(false)
        console.log(errorPokaz);
       let dai = prompt('Введите код фильма:',1)
       

       if(dai<100){
        props.prokid3(false)
        setErrorPokaz(true)
        routeChange33()
       }else{
       dai=dai-100;
       if(dai<=0 || dai<=12){
          props.prokid4(dai)
           props.prokid3(true)
           setErrorPokaz(false)
       }else{
           console.log('не то');
           props.prokid3(false)
           setErrorPokaz(true)
           routeChange33()
       }
    }
}

useEffect(() => {

    window.scroll(0, -100)

}, [errorPokaz])
    return (
        <nav>
            <div className={stili.niz}>

                <NavLink to="/Films" className={navData => navData.isActive ? stili.active : stili.item}>Фильмы</NavLink>
                <NavLink to="/Film_for_house" className={navData => navData.isActive ? stili.active : stili.item}>Фильмы для дома</NavLink>
                <NavLink to="/Kinoteatrs" className={navData => navData.isActive ? stili.active : stili.item}>Кинотеатры</NavLink>
                <NavLink to="/Sale" className={navData => navData.isActive ? stili.active : stili.item}>Акции</NavLink>
                <NavLink to="/Gift" className={navData => navData.isActive ? stili.active : stili.item}>Подарок</NavLink>
                <NavLink to="/Event" onClick={()=>prms()} className={navData => navData.isActive ? stili.active : stili.item}>Экран TV</NavLink>
                


            </div>
            {errorPokaz ? <ErrorStake> </ErrorStake>:''}
        </nav>
    )
})
export default Niz_nav;