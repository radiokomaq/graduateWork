import React from 'react';
import Films_dann from '../Films/films_cont/Films_dann';
import stili from './Film_for_house.module.css'

const Film_for_house = (props) =>{
    let filmElem = props.prokid.filmHouseCreate.map(f=> <Films_dann title={f.title} url={f.url} age_limit={f.age_limit} genre={f.genre} avatar={f.avatar} />); 
    return(
        <div className={stili.film_house}>
            
            {filmElem}
        </div>
    )
}
export default Film_for_house;