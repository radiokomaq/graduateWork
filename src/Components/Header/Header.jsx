import React from 'react';
import stili from './Header.module.css'
import Niz_nav from './low_nav/niz_nav';
import Verh_nav from './ver_nav/verh_nav';

const Head = (props) => {
  return (
    <div className={stili.hed}>
      {/* <div className={stili.razm}> */}
      <Verh_nav prokid={props.prokid} prokid2={props.prokid2}/>
      <Niz_nav prokid3={props.prokid3} prokid4={props.prokid4}/>
      <hr></hr>
      {/* </div> */}
    </div>
  )
}
export default Head;