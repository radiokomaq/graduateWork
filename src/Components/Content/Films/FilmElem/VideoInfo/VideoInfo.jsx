import React from 'react';
import stili from './VideoInfo.module.css'
import ReactPlayer from 'react-player'
import FilmSlaider from './FilmSlaider/FilmSlaider';

const VideoInfo = (props) =>{
    return(
        <div className={stili.filmVideoElem}>
            <div >
            <ReactPlayer width='600px' controls url={props.prokid} className={stili.pleer} />
            </div>
            <div>
                <FilmSlaider prokid={props.prokid2} prokid2={props.prokid3} prokid3={props.prokid4}/>
            </div>
            
        </div>
    )
}
export default VideoInfo;