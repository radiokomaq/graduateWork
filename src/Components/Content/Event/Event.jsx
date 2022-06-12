import React, { useState, useEffect, Component } from 'react';
import Mistake from '../../Modal/Mistake/Mistake';
import stili from './Event.module.css'
import * as axios from 'axios';
import Select from 'react-select'

const Evnt = React.memo((props) =>{
    
//     const [appPos, setAppPos] = useState();
//     useEffect(() => {
//         axios.get('http://test2.ua/index4.php').then((resp) => {
//           const allps = resp.data;
//           setAppPos(allps);
//         });
//       });

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
    return(
        <div className={stili.event}>
            <Select onChange={onChange} value={getValue()} options={options} />
            <div>{dayPick=='20.06.22'? <span>1</span> : dayPick=='21.06.22'? <span>2</span>:dayPick=='22.06.22'? <span>3</span>:dayPick=='23.06.22'? <span>4</span>:<span>5</span>}</div>
            {/* <div className={stili.info}>
               <h1>Приятного просмотра:</h1> 
            </div>
            <div className={stili.film}>
               <img src={props.prokid3}></img>
            </div> */}
        </div>
    )
})
export default Evnt;