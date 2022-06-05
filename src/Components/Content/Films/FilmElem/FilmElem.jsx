import React from 'react';
import stili from './FilmElem.module.css'
import TextInfo from './TextInfo/TextInfo';
import VideoInfo from './VideoInfo/VideoInfo';

const FilmEleming = (props) => {
    return (
        <div className={stili.filmElem}>
            <VideoInfo prokid={props.triler} prokid2={props.avatar} prokid3={props.avatar2} prokid4={props.avatar3}/>
            <TextInfo prokid={props}/>

        </div>
    )
}

export default FilmEleming;