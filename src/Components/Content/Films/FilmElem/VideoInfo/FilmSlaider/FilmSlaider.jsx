import React from "react";
import stili from './FilmSlaider.module.css'

const FilmSlaider = (props) =>{
    return(
        <div className={stili.filmSlaider}>
            <div className={stili.foto1}>
            <img src={props.prokid}></img> 
            </div>
            <div className={stili.foto2}>
            <img src={props.prokid2}></img> 
            </div>
            <div className={stili.foto3}>
            <img src={props.prokid3}></img> 
            </div>
        </div>
    )
}

export default FilmSlaider;