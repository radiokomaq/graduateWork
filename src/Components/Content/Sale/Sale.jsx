import React from 'react';
import { NavLink } from 'react-router-dom';
import stili from './Sale.module.css'
import Sale_cont from './Sale_cont/Sale_cont';

const Sale = (props) => {
    let saleElem = props.prokid.saleCont_create.map(sl=> <Sale_cont avatar={sl.avatar} title={sl.title} data={sl.data} url={sl.url} />); 
    return (
        <div className={stili.sale}>

                {saleElem}

        </div>
    )
}
export default Sale;