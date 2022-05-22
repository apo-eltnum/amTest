import React from "react";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function OptionsBar({setShowModal}){
    return(
        <div className="options-div">
            <div className="options-btn">
                <span>FAVORITOS</span>
                <BookmarkIcon className="options-icon"/>
            </div>
            <div className="options-btn" onClick={()=> setShowModal(true)}>
                <span>AGREGAR</span>
                <PersonAddIcon className="options-icon"/>
            </div>
        </div>
    )
}