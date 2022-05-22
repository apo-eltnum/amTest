import React,{useState} from "react";
import students from '../../data/hp-students.json';
import Card from "../elements/Card";
import Modal from "../elements/Modal";
import OptionsBar from "../elements/OptionsBar";
export default function Home(){
    const [showModal,setShowModal] = useState(false);

    const modValidate = showModal ? <Modal showModal={showModal} setShowModal={setShowModal}/> : null;
    
    return(
        <div className="main-background">
            <OptionsBar setShowModal={setShowModal}/>
            <img className="main-logo" src="/hp-logo.png" alt="logo"/>
            <span className="filter-label">Selecciona tu Filtro</span>
            <div className="button-div">
                <button className="btn btn-filter">ESTUDIANTES</button>
                <button className="btn">STAFF</button>
            </div>
            <div className="card-container">
                {students.map((student)=>{
                    return(
                        <Card element={student}/>
                    )
                })}
            </div>
            {modValidate}
        </div>
    )
}
