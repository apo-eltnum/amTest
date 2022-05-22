import React,{useState,useEffect} from "react";
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
        <div id="myModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <span class="close" onClick={()=> setShowModal(!showModal)}>&times;</span>
      <h2 className="card-info-header">Agregar nueva Persona</h2>
    </div>
    <div class="modal-body">
        <label htmlFor="name">Nombre</label>
        <input name="name" placeholder="Nombre" onChange={onChangeData} value={name}/>
        <label htmlFor="dateOfBirth">Cumpleaños</label>
        <input name="dateOfBirth" type="date" onChange={onChangeData} value={dateOfBirth}/>
        <br/>
        <label htmlFor="eyeColour">Color de Ojos</label>
        <input name="eyeColour" placeholder="Color de Ojos" onChange={onChangeData} value={eyeColour}/>
        <label htmlFor="hairColour">Color de Pelo</label>
        <input name="hairColour" placeholder="Color de Pelo" onChange={onChangeData} value={hairColour}/>
        <br/>
        <div>
            <legend>Género</legend>
            <div className="radio">
            <label>
                <input name="gender"
                type="radio"
                value="male"
                checked={gender === "male"}
                onChange={onChangeData}
                />
                Hombre
            </label>
            </div>
            <div className="radio">
            <label>
                <input name="gender"
                type="radio"
                value="female"
                checked={gender === "female"}
                onChange={onChangeData}
                />
                Mujer
            </label>
            </div>
        </div>

        <div>
            <legend>Posición</legend>
            <div className="radio">
            <label>
                <input name="personType"
                type="radio"
                value="student"
                checked={personType === "student"}
                onChange={onChangeType}
                />
                Estudiante
            </label>
            </div>
            <div className="radio">
            <label>
                <input name="personType"
                type="radio"
                value="staff"
                checked={personType === "staff"}
                onChange={onChangeType}
                />
                Staff
            </label>
            </div>
        </div>

    </div>
    <div class="modal-footer">
      <button className="btn">Guardar</button>
    </div>
  </div>
</div>

    )
}