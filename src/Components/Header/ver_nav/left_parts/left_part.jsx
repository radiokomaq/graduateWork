import React from 'react';
import stili from './left_part.module.css'
import logo from './foto/sakura2_test.png'
import karta from './foto/karta_last2.png'
import { NavLink } from 'react-router-dom';


const Left_part = () =>{
    
    return(
        <div className={stili.left_part}>
     <NavLink to={'/Films'}  >    
            <img src={logo} />
</NavLink>
<a href='https://yandex.ru/maps/geo/moskva/53000094/?ll=37.385534%2C55.584227&source=wizgeo&utm_medium=maps-desktop&utm_source=serp&z=10'>
<img src={karta} />
</a>

        </div>
    )
}
export default Left_part;