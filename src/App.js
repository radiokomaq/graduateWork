import * as axios from 'axios';
import React, { useState, useEffect, Component, useContext } from 'react';
import './App.css';
// import Cont from './Components/Content/Content';
import Head from './Components/Header/Header';
import Foot from './Components/Footer/Footer';
import {Navigate, Route, Routes, useNavigate, useSearchParams} from 'react-router-dom';
import Film_for_house from './Components/Content/Film_for_house/Film_for_house';
import Films from './Components/Content/Films/Films';
import Podarok from './Components/Content/Gift/Gift';
import Mesto_kino from './Components/Content/Kinoteatrs/Kinoteatrs';
import Sale from './Components/Content/Sale/Sale';
import Evnt from './Components/Content/Event/Event';
// import Testti from './Components/Content/Sale/Test_1/Test_1';
import FilmEleming from './Components/Content/Films/FilmElem/FilmElem';
import Sale_item from './Components/Content/Sale/Sale_item/Sale_item';
import LichKab from './Components/Header/ver_nav/right_part/LichKab/LichKab';
import Modal from './Components/Modal/modal1/Modal';
import Modal2 from './Components/Modal/modal2/Modal2';
import Mistake from './Components/Modal/Mistake/Mistake';
import { useCookies } from "react-cookie";
import {authRout, prosmfilm} from "./context/rout"
import { Context } from './context/context.js';
import { Animate } from './animate/animate';
import Detalic from './Components/Content/Film_for_house/detalic/detalic';
import lupa from './redux/fotos/lupa2.png'
// import Hallset from './Components/Modal/modal3/Hallset';

const App = (props) => {

  const [appState, setAppState] = useState();
  const [appFilmPos, setAppFilmPos] = useState([{
    pos: '101'
  }]);
  const [filmvib, setFilmvib] = useState('');
  
  const [propusk,setPropusk]= useState(false)
  const [otvetNaFilm, setOtvetNaFilm] = useState(1)

  //------------------------dtmas------------------------
  useEffect(() => {

    axios.get('http://80.87.199.186/posHouseFilm').then(({ data }) => {
      const allNam = data;
      setAppFilmPos(allNam);
    });
  }, [setAppFilmPos]);
  // let ems= appUserDt.map(elem => {return(elem.email)});
  // console.log(ems[1]);
  // console.log('render');
  // appNam.map(elem => {console.log(elem.email)});


  //------------------pos id_filmForHouse------------------------------

  // useEffect(() => {
  //   axios.get('http://test2.ua/index4.php').then(({data}) => {
  //     const allps = data;
  //     setAppPos(allps);
  //   });
  // },[setAppPos]);

  //----------------password-------------------------------
  // useEffect(() => {
  //   // const apiUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
  //   axios.get('http://test2.ua/index5.php').then((resp) => {
  //     const allPas = resp.data;
  //     setAppPas(allPas);
  //   });
  // }, [setAppPas]);

  //==============stoimost==============================
  useEffect(() => {
    // const apiUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
    axios.get('http://80.87.199.186/test').then((resp) => {
      const allPersons = resp.data;
      setAppState(allPersons);
    });
  }, [setAppState]);
  // let ticket2= appState.map(elem => {return(elem.ticket)});
  // console.log(appState);

  // const [film,setFilm]= useState('');
let kley=appFilmPos.map(elem => {return(elem.pos)});
let prostkey = kley[0]-100

let maste=props.prokid.filmFoHouse.filmHouseCreate[otvetNaFilm].avatar
// console.log('данные аппПос из бд: ', maste);



const [cookies, setCookie, removeCookie] = useCookies(["user","email","token"]);


// function handleRemoveCookie(){
//   removeCookie('user');
//   removeCookie('email');
//   removeCookie('token');
// }
// console.log(cookies);

// const [userro, setUserro]=useContext({Context})


// let kld=appPos;

  const [modalActive, setModalActive] = useState(false);
  const [modalActive2, setModalActive2] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [idef, setIdef] = useState();

  // let ttes=appPos.map(elem=>props.prokid.filmFoHouse.filmHouseCreate[elem].avatar);
  const [chek, setChek]= useState(false)
  // const isAus =false;
  // console.log(cookies.token);
  let navigate2 = useNavigate(); 
  function routeChange2(){ 
    let path2 = `/Films`; 
    navigate2(path2);
  }
//Красиво поменять 
  useEffect(() => {
    if (cookies.token==null){
      setChek(false);
      routeChange2()
    }else{
      setChek(true);
    }
  },[cookies.token])


const [filmEvent, setFilmEvent] = useState([{
  pathname: '122'
}]);
  useEffect(() => {
    axios.get('http://80.87.199.186/getFilms').then((resp) => {
      const allPersons = resp.data;
      setFilmEvent(allPersons);
    });
  }, [setFilmEvent]);




 const [tokenData, setTokenData]=useState({
  name: '123',
 })
const [basketFilm, setBasketFilm] = useState()
const [basketFilmKod, setBasketFilmKod] = useState()
 useEffect(() => {
  if(cookies.token!=null){
    let response = 0;
    let viufu =[]
    let viufu2=[]
    var xhr = new XMLHttpRequest();
    var formElement = new FormData()
    formElement.set('jvt', cookies.token)
    xhr.open('POST', 'http://80.87.199.186/setkok');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          response = JSON.parse(xhr.response);
          for (let i = 2; i < response.length; i++) {
            // viufu.push(response[i].title)
            viufu=[...viufu,response[i].title]
            viufu2=[...viufu2,response[i].pos]
          }
          setTokenData({
            "email": response[0].email,
            "name": response[0].name,
            "phone": response[0].phone,
            "ostatok": +response[1],
            "role":response[0].role
            
    })
    setBasketFilm(viufu)
    setBasketFilmKod(viufu2)
        }
    }
    xhr.send(formElement);
   
  }

 },[])

 document.body.onload = function () {
  setTimeout(function () {
      var preloader = document.getElementById('pagePreloader');
      if (preloader.className!='done43') {
        preloader.className='done43'
      }
  }, 2500);
}

let CdFilmElem = filmEvent.map(r=> <Route path={r.url} element={<FilmEleming id={r.id} avatar={r.avadesp1} avatar2={r.avadesp2} avatar3={r.avadesp3} title={r.title} age_limit={r.age_limit} genre={r.genre} actor={r.actor} dir={r.dir} info={r.info} description={r.description} triler={r.triler} vibfilm={setFilmvib} prosm={filmvib} knopurl={r.urlsil} cookies={cookies.token} modal={setModalActive} />} />)
  // let CdFilmElem = props.prokid.filmsPage.filmsCreate.map(r => <Route path={r.url}  element={<FilmEleming id={r.id} avatar={r.avatar} title={r.title} age_limit={r.age_limit} genre={r.genre} actor={r.actor} dir={r.dir} info={r.info} description={r.description} triler={r.triler} vibfilm={setFilmvib} prosm={filmvib} knopurl={r.urlsil} cookies={cookies.token} modal={setModalActive} />} />)
  let CdFilmHouseElem = props.prokid.filmFoHouse.filmHouseCreate.map(r => <Route path={r.url} element={<FilmEleming id={r.id}  title={r.title} age_limit={r.age_limit} genre={r.genre} actor={r.actor} dir={r.dir} info={r.info} description={r.description} triler={r.triler} vibfilm={setFilmvib} prosm={filmvib} knopurl={r.urlsil} cookies={cookies.token} modal={setModalActive} avatar={r.avatar1} avatar2={r.avatar2} avatar3={r.avatar3}/>} />)
  let CdSaleElem = props.prokid.saleContent.saleCont_create.map(s => <Route path={s.url}  element={<Sale_item avatar={s.avatar} title={s.title} desp={s.desp} desp2={s.desp2} />} />)
  return (
    <Context.Provider value={
      [tokenData,setTokenData]
      }>


      <div className='app-wrapper'>
        
        <div className='bsHead'>
          <Head prokid={setModalActive} prokid2={cookies} prokid3={setPropusk} prokid4={setOtvetNaFilm}/>
        </div>
        {/* <Animate /> */}
        
        <aside id='basket' className='basket'><div>
          <img src={lupa}></img>
          {basketFilm ? <h1>Ваши фильмы:</h1>:
    <h1>Вы еще не преобритали фильмы!</h1>}
<div className='basketPage'>
  <div className='basketPage1'>
  <h3>Фильм</h3>
  {basketFilm ? basketFilm.map(elem =>{
          return <p>{elem} :</p>
        }):console.log('11')}
  </div>
  <div className='basketPage2'>
  <h3>Код</h3>
  {basketFilmKod ? basketFilmKod.map(elem =>{
          return <p>{elem}</p>
        }):console.log('11')}
  </div>
</div>
            {/* <tr>
              <td>10</td><th>{tokenData.title}</th>
            </tr> */}

          </div> </aside>
        <Modal active={modalActive} setActive={setModalActive} prokid={setModalActive2} email={email} setEmail={setEmail} password={password} setPassword={setPassword} name={name} setName={setName} />
        <Modal2 active2={modalActive2} setActive2={setModalActive2} prokid={setModalActive}  idef={idef} setIdef={setIdef} kook={setCookie} chek={setChek} setBasketFilm={setBasketFilm} setBasketFilmKod={setBasketFilmKod}/>
        {/* <Cont /> */}
        <div className='content'>
          <Routes>
          <Route exact path='/Mistake' element={<Mistake/>} />
          {filmEvent[0]['title']==null ?
          '':
          <Route exact path='/Films' element={<Films prokid={filmEvent} />} />
          }
            <Route path='/Gift' element={<Podarok prokid={cookies.token} prokid2={setModalActive}/>} />
            <Route path='/Kinoteatrs' element={<Mesto_kino />} />
            <Route path='/detalic' element={<Detalic />} />
            <Route path='/Sale' element={<Sale prokid={props.prokid.saleContent} />} />
            {/* <Route  path='/Test_1' element={<Testti />} /> */}
            {CdFilmElem}
            {CdSaleElem}
            {CdFilmHouseElem}
            <Route path='/Film_for_house' element={<Film_for_house prokid={props.prokid.filmFoHouse} />} />
            {propusk && prosmfilm.map(({path, Component}) =>
            <Route path={path} element={<Evnt prokid={appState} prokid2={filmvib} prokid3={maste}/>}></Route>
            )}
            {chek && authRout.map(({path, Component}) =>
            <Route path={path} element={<LichKab remove={removeCookie} chek={setChek}/>}></Route>
)}
{/* <Navigate to={path}/> */}
          </Routes>
        </div>

        <div className='footer'>
          <Foot />
 </div>

      </div>

    </Context.Provider>
  );
}

export default App;
