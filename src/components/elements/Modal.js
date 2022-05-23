import React,{useState} from "react";
import axios from 'axios';
import '../../styles/modal.scss';
import {storage} from '../../data/firebase';
import {ref,uploadBytes,getDownloadURL} from 'firebase/storage';
import moment from 'moment';

const houseList=["Gryffindor","Slytherin","Hufflepuff","Ravenclaw"];

export default function Modal({showModal,setShowModal,update,setUpdate}){
    const [character,setCharacter] = useState({name:'',dateOfBirth:new Date(),eyeColour:'',
                                         hairColour:'',gender:'male',hogwartsStudent:true,
                                         hogwartsStaff:false,alive:true,house:"Gryffindor"}) 
    const [image,setImage] = useState(null);
    const [characterType, setCharacterType] = useState('student');
    const [showMessage,setShowMessage] = useState(false); 
    const [error,setError] = useState(false);
    const [message,setMessage] = useState(false); 

    const {name,dateOfBirth,eyeColour,hairColour,gender,house} = character;
    const validRegex = /^[A-Za-z ]+$/

    function onChangeData(e){
        if(validRegex.test(e.target.value)||e.target.value===""||e.target.value===" "){
            setCharacter({...character,
                [e.target.name] : e.target.value})
        }
    }

    function onChangeDate(e){
        setCharacter({...character,
            dateOfBirth: e.target.value})
    }


    function onChangeType(e)
    {
        setCharacterType(e.target.value);
        if(e.target.value==="student"){
            setCharacter({...character,
                hogwartsStudent : true,
                hogwartsStaff:false})
        }else{
            setCharacter({...character,
                hogwartsStudent : false,
                hogwartsStaff:true})
        }
    }


    function onChangeImg(e){
        if(e.target.files[0]){
            let file = e.target.files[0];
            if(file.type==="image/png"||file.type==="image/gif"||file.type==="image/jpg"||file.type==="image/jpeg"){
                setImage(file);
                setMessage("");
                setShowMessage(false);
                setError(false);
            }else{
                setMessage("Seleccione una Fotografía válida");
                setShowMessage(true);
                setError(true);
            }
        }else{
            setMessage("Seleccione una Fotografía");
            setShowMessage(true);
            setError(true);
        }
    }

    function validateText(value,input){
        let result=false;
        if(value!=="" && value!==" "){
            result= true;
            setMessage("");
            setError(false);
            setShowMessage(false);
        }else{
            setMessage("Ingrese "+input);
            setShowMessage(true);
            setError(true);
        }

        return result;
    }


    function validateImg(){
        let result=false;
        if(image){
            result=true;
        }else{
            setMessage("Seleccione una Fotografía");
            setShowMessage(true);
            setError(true);
        }

        return result;
    }

    async function postRequest(){
       let nombreFoto = image.name;
              //subimos la foto a firebase
              var imgRef = ref(storage, `imagencharactera/${nombreFoto}`);
              var url = ""
              url = await uploadBytes(imgRef,image).then(
                  uploadResult => {return getDownloadURL(uploadResult.ref)}).catch((error)=>{
                setMessage("Error al obtener URL de foto");
                setShowMessage(true);
                setError(true);});
                if (url){
                    let auxObj = character;
                  auxObj.dateOfBirth= moment(dateOfBirth).format('DD-MM-YYYY');
                  auxObj.image= url;
                  axios.post(`${process.env.REACT_APP_API_URI}characters`,auxObj).then(res=>{
                        setMessage("Personaje registrado exitosamente");
                        setShowMessage(true);
                        setError(false);
                        setUpdate(!update);
                        setImage(null);
                        setCharacterType('student');
                        setCharacter({...character,
                            name:'',dateOfBirth:new Date(),eyeColour:'',
                                         hairColour:'',gender:'male',hogwartsStudent:true,
                                         hogwartsStaff:false,alive:true,house:"Gryffindor"})
                }).catch((error)=>{
                    setMessage("Error al registrar charactera");
                    setShowMessage(true);
                    setError(true);
                })
                }
    }
    function validateData(){
        if(validateText(name,"Nombre")&&validateText(name,"Color de Ojos")
        &&validateText(name,"Color del Pelo")&&validateImg()){
            postRequest();
        }
    }

    return(
        <div id="myModal" className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={()=> setShowModal(!showModal)}>&times;</span>
                    <h2 className="card-info-header">Agregar nuevo personaje</h2>
                    <div className="message" 
                    styles={{display:(showMessage ? 'block' : 'none'),
                        backgroundColor: (error ? '#E74C3C' : '#A9DFBF')}}>{message}</div>
                </div>
                <div className="modal-body">
                    <div className="input-div">
                        <label htmlFor="name" className="label">NOMBRE</label>
                        <input name="name" placeholder="Nombre" onChange={onChangeData} value={name}/>
                    </div>
                    <div className="input-div">
                        <label htmlFor="dateOfBirth" className="label">CUMPLEAÑOS</label>
                        <input name="dateOfBirth" type="date" onChange={onChangeDate} value={dateOfBirth}/>
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
                                <input name="characterType"
                                type="radio"
                                value="student"
                                checked={characterType === "student"}
                                onChange={onChangeType}
                                />
                                ESTUDIANTE
                            </label>
                            <label className="radio-label">
                                <input name="characterType"
                                type="radio"
                                value="staff"
                                checked={characterType === "staff"}
                                onChange={onChangeType}
                                />
                                STAFF
                            </label>
                        </div>
                    </div>
                    <div className="input-div">
                        <label htmlFor="house" className="label">CASA</label>
                        <select name="house" value={house} onChange={onChangeData}>
                            {houseList.map((house,index)=>{
                                return(
                                    <option value={house} key={index}>{house}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="input-div">
                        <label htmlFor="image" className="label">FOTOGRAFÍA</label>
                        <input name="image" type="file" onChange={onChangeImg}
                          accept="image/png, image/gif, image/jpeg, image/jpg"/>
                    </div>
                </div>
                <div className="modal-footer">
                <button className="btn" onClick={validateData}>Guardar</button>
                </div>
            </div>
        </div>

    )
}