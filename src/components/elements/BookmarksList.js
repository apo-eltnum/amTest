import React from "react";
import BookMark from './Bookmark';

export default function BookMarkList({list,onDelete}){
    return(
        <div className="bookmark-list">
            {list.map((bookmark)=>{
                return(
                    <BookMark element={bookmark} onDelete={onDelete}/>
                )
            })}
        </div>
    )
}