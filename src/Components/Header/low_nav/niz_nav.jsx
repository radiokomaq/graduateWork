import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { NavLink, useNavigate } from 'react-router-dom';
import stili from './niz_nav.module.css'

const Niz_nav = (props) => {

    let navigate = useNavigate(); 
    function routeChange(){ 
      let path4 = `/Films`; 
      navigate(path4);
    }

    function prms(){
       let dai = prompt('ввести туть',1)
       
       if(dai<=0 || dai<=12){
           console.log(1);
          props.prokid4(dai)
           props.prokid3(true)
       }else{
           console.log('не то');
           props.prokid3(false)
           routeChange()
       }
    }
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
        </nav>
    )
}
export default Niz_nav;