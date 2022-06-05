import React, { useContext, useState } from 'react';
import stili from './right_part.module.css'
import Soth_seti from './Soth_seti/Soth_seti';
import { useNavigate } from "react-router-dom";
import { Context } from '../../../../context/context';


const Right_part = (props) =>{

    let navigate = useNavigate(); 
  function  kudaadres(){
      if(props.prokid2.token==null){
        props.prokid(true)
      }else{
        let path = `/Unification`; 
        navigate(path);
      }
  }
  const [nameUserAush,setNameUserAush] = useContext(Context);
    return(
        <div className={stili.right_part}>
            <div>
            <Soth_seti />
            </div>
            {props.prokid2.token==null ?
            <div>
            <button onClick={()=> kudaadres()}> ВОЙТИ</button>
            </div>:
            <div className={stili.rITH_knop}>
            <button onClick={()=> kudaadres()}> вход || {nameUserAush.name}</button>
            </div>
            }

            

        </div>
    )
}
export default Right_part;