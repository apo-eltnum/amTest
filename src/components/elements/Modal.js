import React from "react";

export default function Modal({showModal,setShowModal}){
    return(
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span class="close" onClick={()=> setShowModal(!showModal)}>&times;</span>
                <p>Some text in the Modal..</p>
            </div>
        </div>
    )
}