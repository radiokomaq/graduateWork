import React, { useEffect, useState } from 'react';
import Kontakt from './Kontakt/Kontakt';
import LichDann from './LichDann/LichDann';
import stili from './LichKab.module.css'

const LichKab = (props) =>{


    // function handleRemoveCookie(){
    //     remove('user');
    //     remove('email');
    //     remove('token');
    //     chek(false)
    //   }
const [adminValid, setAdminValid] = useState(false)

function add_Filmi(){
    var xhr = new XMLHttpRequest();
    let response = 0
    let formData = new FormData(document.forms.EventFilm);
    xhr.open('POST', 'http://test2.ua/add_Film');
    // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            response = JSON.parse(xhr.response);
            if(response==1){
                // alert('Ошибка')                    

            }else{
            }
        }
        
    }
    xhr.send(formData);
}


    return(

  <div>
        <div  className={stili.lich}>

            <LichDann remove={props.remove} chek={props.chek} adminValid={adminValid} setAdminValid={setAdminValid}/>

            <Kontakt />
            {/* {'личный кабинет нахуй ахуеть ДА?'+name}
            <a href='/Films'>
            <button onClick={handleRemoveCookie}>Выйти</button>
            </a> */}
        </div>
{adminValid ?
<form  name='EventFilm' className={stili.dobav}>
    <div>
    <h5>Title</h5>
    <input name='title' type="text" placeholder='vvesti dannie...'/>
</div>
<div>
<h5>url</h5>
<input name='url' type="text" placeholder='vvesti dannie...'/>
</div>
<div>
<h5>age_limit</h5>
<input name='age_limit' type="text" placeholder='vvesti dannie...'/>
</div>
<div>
<h5>genre</h5>
<input name='genre' type="text" placeholder='vvesti dannie...'/>
</div>
<div>
<h5>actor</h5>
<input name='actor' type="text" placeholder='vvesti dannie...'/>
</div>
<div>
<h5>dir</h5>
<input name='dir' type="text" placeholder='vvesti dannie...'/>
</div>
<div>
<h5>info</h5>
<input name='info' type="text" placeholder='vvesti dannie...'/>
</div>
<div>
<h5>avatar</h5>
<input name='avatar' type="text" placeholder='vvesti dannie...'/>
</div>
<div>
<h5>description</h5>
<input name='description' type="text" placeholder='vvesti dannie...'/>
</div>
<div>
<h5>triler</h5>
<input name='triler' type="text" placeholder='vvesti dannie...'/>
</div>
<div>
<h5>urlsil</h5>
<input name='urlsil' type="text" placeholder='vvesti dannie...'/>
</div>
<button  onClick={()=> add_Filmi()}> submit</button>
</form>
:
''}
        </div>
    )
}
export default LichKab;