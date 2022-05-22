import axios from "axios";
import React,{useState,useEffect} from "react";
import Card from "../elements/Card";
import Modal from "../elements/Modal";
import OptionsBar from "../elements/OptionsBar";
export default function Home(){
    const [showModal,setShowModal] = useState(false);
    const [list,setList] = useState([]);

    useEffect(()=>{
        async function getAllData(){
            await axios.get('http://localhost:5000/characters').then(res=>{
                setList(res.data);
            })
        }

        getAllData();
    },[])


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
                {
                    list.length!==0 ?
                    list.map((character)=>{
                        return(
                            <Card element={character}/>
                        )
                    })
                    :<div>Loading...</div>
                }
            </div>
            {modValidate}
        </div>
    )
}
