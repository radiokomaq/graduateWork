import React from 'react';
import stili from './Gift.module.css'
import Mesto_kino from '../Kinoteatrs/Kinoteatrs'
import InfoGift from './infoGift/InfoGift';
import SlaiderG from './SlaiderGift/Slaidr';

const Podarok = (props) =>{
    return(
        
        <div className={stili.gift}>
            <InfoGift />
            
            <SlaiderG prokid={props.prokid} prokid2={props.prokid2}/>
        </div>
    )
}
export default Podarok;
