import React from 'react';
import stili from './films.module.css'
import Films_dann from './films_cont/Films_dann';

const Films = (props) => {
let filmElem = props.prokid.map(f=> <Films_dann title={f.title} url={f.url} age_limit={f.age_limit} genre={f.genre} avatar={f.avatar} />); 
    return (
        <div className={stili.film }>

{filmElem}

           
        </div>
    )
}
export default Films;