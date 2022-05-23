import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

export default function BookMark({element,onDelete}){
    return(
        <div className="bookmark">
            <img className="bookmark-photo-div" src={element.image} alt={element.image}/>
            <span>{element.name}</span>
            <DeleteIcon className="delete-icon" onClick={() => onDelete(element)} key={element.id}/>
        </div>
    )
}