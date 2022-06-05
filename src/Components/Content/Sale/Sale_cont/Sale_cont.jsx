import React from 'react';
import stili from './Sale_cont.module.css'
import { NavLink } from 'react-router-dom';

const Sale_cont = (props) => {
    let path = props.url;
    return (
    <NavLink to={path} className={stili.saleCont}>
        
                {props.avatar}
                <h1> {props.title}</h1>
                <span> {props.data}</span>

             </NavLink>
     
    )
}

export default Sale_cont;