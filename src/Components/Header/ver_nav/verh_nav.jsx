import React from 'react';
import Left_part from './left_parts/left_part';
import Right_part from './right_part/right_part';
import stili from './verh_nav.module.css'

const Verh_nav = (props) => {
    return (
        <div className={stili.verh}>
                <Left_part />
                <Right_part prokid={props.prokid} prokid2={props.prokid2}/>
        </div>
    )
}
export default Verh_nav;