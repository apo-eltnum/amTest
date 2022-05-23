import axios from "axios";
import React,{useState,useEffect} from "react";
import Card from "../elements/Card";
import Modal from "../elements/Modal";
import OptionsBar from "../elements/OptionsBar";

export default function Home(){
    
    
    const [showModal,setShowModal] = useState(false);
    const [list,setList] = useState([]);
    const [update, setUpdate] = useState(false);

    useEffect(()=>{
        async function getAllData(){
            await axios.get(`${process.env.REACT_APP_API_URI}characters`).then(res=>{
                setList(res.data);
            })
        }
        setList([]);
        getAllData();
    },[update])


    async function getStudents(){
        setList([])
        await axios.get(`${process.env.REACT_APP_API_URI}characters?hogwartsStudent=true&hogwartsStaff=false`).then(res=>{
            setList(res.data);
        })
    }

    async function getStaff(){
        setList([])
        await axios.get(`${process.env.REACT_APP_API_URI}characters?hogwartsStudent=false&hogwartsStaff=true`).then(res=>{
            setList(res.data);
        })
    }

    async function getNotAlive(){
        setList([])
        await axios.get(`${process.env.REACT_APP_API_URI}characters?alive=false`).then(res=>{
            setList(res.data);
        })
    }

    const modValidate = showModal ? <Modal showModal={showModal} setShowModal={setShowModal} update={update} setUpdate={setUpdate}/> : null;
    
    return(
        <div className="main-background">
            <OptionsBar setShowModal={setShowModal}/>
            <img className="main-logo" src="/hp-logo.png" alt="logo"/>
            <span className="filter-label">Selecciona tu Filtro</span>
            <div className="button-div">
                <button className="btn btn-filter" onClick={()=>getStudents()}>ESTUDIANTES</button>
                <button className="btn btn-filter" onClick={()=>getStaff()}>STAFF</button>
                <button className="btn" onClick={()=>getNotAlive()}>FINADOS</button>
            </div>
            <div className="card-container">
                {
                    list.length!==0 ?
                    list.map((character)=>{
                        return(
                            <Card element={character} key={character.name}/>
                        )
                    })
                    :<div>Loading...</div>
                }
            </div>
            {modValidate}
        </div>
    )
}
