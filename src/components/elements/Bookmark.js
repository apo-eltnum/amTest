import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

export default function BookMark({element,onDelete}){
    return(
        <div className="bookmark">
            <img className="bookmark-photo-div" src={element.image} alt="image"/>
            <span className="bookmark-name">{element.name}</span>
            <DeleteIcon className="delete-icon" onClick={() => onDelete(element)}/>
        </div>
    )
}