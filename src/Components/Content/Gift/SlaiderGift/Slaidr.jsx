import React from 'react';
import stili from './SlaigerGift.module.css'

import giftkard from './fotosslaid/giftkard.png'
import Nominal from './Nominal/Nominal';


const SlaiderG =(props) =>{
    return(
<div className={stili.sl}>

    <h2> Выбери наминал:</h2>
                    <img 
                    src={giftkard}
                    />

<Nominal prokid={props.prokid} prokid2={props.prokid2}/>
                    </div>


    )
}
export default SlaiderG;