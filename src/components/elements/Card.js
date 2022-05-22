import React from "react";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import '../../styles/card.scss';

const griffindorBackground= "linear-gradient(135deg, #FF0000 0%, #FED482 100%)";
const slytherinBackground=  "linear-gradient(135deg, #1C792B 0%, #82E95E 100%)";
const ravenclawBackground=  "linear-gradient(135deg, #0597B7 0%, #66D1FF 100%)";
const hufflepuffBackground= "linear-gradient(135deg, #FFC700 0%, #FFF388 100%)";

export default function Card({element}){

    function getBackgroundColor(house){
        let color=""
        switch(house){
            case 'GRYFFINDOR':
                color=griffindorBackground;
                break;
            case 'SLYTHERIN':
                color=slytherinBackground;
                break;
            case 'RAVENCLAW':
                color=ravenclawBackground;
                break;
            case 'HUFFLEPUFF':
                color=hufflepuffBackground;
                break;
            default:
                color=griffindorBackground;
                break;
        }
        return color;
    }


    return(
        <div className={element.alive ? "card" : "card-dead"}>
            <div className="card-photo-div" style={{background: getBackgroundColor(element.house.toUpperCase())}}>
                <img className="card-photo-img" src={element.image} alt="integrante"/>
            </div>
            <div className="card-info-div">
                <div className="card-info-type">
                        {element.alive ? "VIVO " : "FINADO "}
                        /
                        {element.hogwartsStudent ? " ESTUDIANTE"
                        :" STAFF"}
                    <BookmarkBorderIcon className="bookmark-icon-selected"/>
                </div>
                <p className="card-info-header">{element.name}</p>
                <div className="card-data-div">
                    <span className="data-label"><strong>{"Cumpleaños "}</strong>{element.dateOfBirth}</span>
                    <span className="data-label"><strong>{"Género "}</strong>{element.gender}</span>
                    <span className="data-label"><strong>{"Color de ojos "}</strong>{element.eyeColour}</span>
                    <span className="data-label"><strong>{"Color de pelo "}</strong>{element.hairColour}</span>
                </div>
            </div>
        </div>
    )
}
