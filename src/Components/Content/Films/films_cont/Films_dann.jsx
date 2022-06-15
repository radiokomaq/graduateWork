import React from "react";
import stili from './Films_dann.module.css'
import { NavLink } from 'react-router-dom';

const Films_dann = (props) => {
    let path = props.url;
    return (
        <NavLink to={path} className={stili.film_dann}>
            <div className={stili.title}>
                <span>{props.title}</span>
            </div>
            <div className={stili.image}>
            <img src={props.avatar}></img>
            </div>
            <div className={stili.raiting}>
                <span className={stili.obram}> {props.age_limit}</span>
                <span className={stili.genre}>{ ' ' + props.genre}</span>
            </div>

        </NavLink>

    )
}

export default Films_dann;