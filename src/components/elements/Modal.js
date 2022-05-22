import React,{useState,useEffect} from "react";
import '../../styles/modal.scss';
import {storage} from '../../data/firebase';

import moment from 'moment';

export default function Modal({showModal,setShowModal}){
    const [person,setPerson] = useState({name:'',dateOfBirth:new Date(),eyeColour:'',
                                         hairColour:'',gender:'male',hogwartsStudent:true,
                                         hogwartsStaff:false,alive:true}) 

    const [personType, setPersonType] = useState('student')

    const {name,dateOfBirth,eyeColour,hairColour,gender} = person;

    function onChangeData(e){
        setPerson({...person,
                    [e.target.name] : e.target.value})
    }


    function onChangeType(e)
    {
        setPersonType(e.target.value);
        if(e.target.value==="student"){
            setPerson({...person,
                hogwartsStudent : true,
                hogwartsStaff:false})
        }else{
            setPerson({...person,
                hogwartsStudent : false,
                hogwartsStaff:true})
        }
    }

    return(
        <div id="myModal" className="modal">
  <div className="modal-content">
    <div className="modal-header">
      <span className="close" onClick={()=> setShowModal(!showModal)}>&times;</span>
      <h2 className="card-info-header">Agregar nueva Persona</h2>
    </div>
    <div className="modal-body">
        <div className="input-div">
            <label htmlFor="name" className="label">NOMBRE</label>
            <input name="name" placeholder="Nombre" onChange={onChangeData} value={name}/>
        </div>
        <div className="input-div">
            <label htmlFor="dateOfBirth" className="label">CUMPLEAÑOS</label>
            <input name="dateOfBirth" type="date" onChange={onChangeData} value={dateOfBirth}/>
        </div>
        <br/>
        <div className="input-div">
            <label htmlFor="eyeColour" className="label">COLOR DE OJOS</label>
            <input name="eyeColour" placeholder="Color de Ojos" onChange={onChangeData} value={eyeColour}/>
        </div>
        <div className="input-div">
            <label htmlFor="hairColour" className="label">COLOR DE PELO</label>
            <input name="hairColour" placeholder="Color de Pelo" onChange={onChangeData} value={hairColour}/>
        </div>
        <br/>
        <div className="input-div">
            <legend className="label">GÉNERO</legend>
            <div className="radio-div">
                <label className="radio-label">
                    <input name="gender"
                    type="radio"
                    value="male"
                    checked={gender === "male"}
                    onChange={onChangeData}
                    />
                    HOMBRE
                </label>
                <label className="radio-label">
                    <input name="gender"
                    type="radio"
                    value="female"
                    checked={gender === "female"}
                    onChange={onChangeData}
                    />
                    MUJER
                </label>
            </div>
        </div>
        <div className="input-div">
            <legend className="label">POSICIÓN</legend>
            <div className="radio-div">
                <label className="radio-label">
                    <input name="personType"
                    type="radio"
                    value="student"
                    checked={personType === "student"}
                    onChange={onChangeType}
                    />
                    ESTUDIANTE
                </label>
                <label className="radio-label">
                    <input name="personType"
                    type="radio"
                    value="staff"
                    checked={personType === "staff"}
                    onChange={onChangeType}
                    />
                    STAFF
                </label>
            </div>
        </div>

    </div>
    <div className="modal-footer">
      <button className="btn">Guardar</button>
    </div>
  </div>
</div>

    )
}