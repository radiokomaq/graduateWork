import React from 'react';
import stili from './Sale_item.module.css'

const Sale_item = (props) =>{
    return(
        <div className={stili.saleItem}>
            <h1>
            {props.title}
            </h1>
            {props.avatar}
{props.desp}
{props.desp2}
        </div>
    )
}

export default Sale_item;