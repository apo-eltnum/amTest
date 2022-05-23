import React,{useState} from "react";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import BookMarkList from "./BookmarksList";
import { deleteBookmark } from "../../redux/actions";
import {useDispatch,useSelector} from 'react-redux';

export default function OptionsBar({setShowModal}){
    
    const [showFavorites,setShowFavorites] = useState(false);

    const bookmarks = useSelector((state)=> state);
    const dispatch = useDispatch();
    function deleteFromBookmarks(element){
        dispatch(deleteBookmark(element))
    }

    return(
        <div className="options-container">
            <div className="options-div">
                <div className="options-btn" onClick={()=> setShowFavorites(!showFavorites)}>
                    <span>FAVORITOS</span>
                    <BookmarkIcon className="options-icon"/>
                </div>
                <div className="options-btn" onClick={()=> setShowModal(true)}>
                    <span>AGREGAR</span>
                    <PersonAddIcon className="options-icon"/>
                </div>
            </div>
            {showFavorites && bookmarks.length!==0 ? 
            <BookMarkList list={bookmarks} onDelete={deleteFromBookmarks}/>
            :null}
        </div>
    )
}