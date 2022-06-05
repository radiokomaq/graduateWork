import React, { useState, useEffect, Component } from 'react';
import Mistake from '../../Modal/Mistake/Mistake';
import stili from './Event.module.css'
import * as axios from 'axios';

const Evnt = (props) =>{
    
//     const [appPos, setAppPos] = useState();
//     useEffect(() => {
//         axios.get('http://test2.ua/index4.php').then((resp) => {
//           const allps = resp.data;
//           setAppPos(allps);
//         });
//       });


    return(
        <div className={stili.event}>
            <div className={stili.info}>
               <h1>Приятного просмотра:</h1> 
            </div>
            <div className={stili.film}>
                {/* {console.log(props.prokid4 ? 1:2)} */}
               <img src={props.prokid3}></img>
            </div>
        </div>
    )
}
export default Evnt;