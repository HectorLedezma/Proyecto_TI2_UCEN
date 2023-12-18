import React, { useRef, useState } from "react";
import "../styles/styleSignup.css";
import { Outlet, useNavigate} from "react-router-dom";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { BiHide, BiShow, BiUser } from "react-icons/bi";
import CryptoJS from 'crypto-js';
import Heading from "../Componentes/heading";
import {Carreras, conexion } from "../ConectionSQL/conexion";
import { FaPhoneAlt,FaUniversity } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cookies from "universal-cookie";
import { IoMdArrowRoundBack } from "react-icons/io";

function UpUser(){
    const cambio = (ojo) => {
        if(ojo === 'BiShow'){
            setEye(
                <BiHide className="clickeable" fontSize='30'
                    onClick={()=>cambio('BiHide')}
                />);
            setPass('text');
            
        }else{
            setEye(
                <BiShow id='show' className="clickeable" fontSize='30'
                    onClick={()=>cambio('BiShow')}
                />
            );
            setPass('password');
            
        }
    }

    const cambio2 = (ojo) => {
        if(ojo === 'BiShow'){
            setEye2(
                <BiHide className="clickeable" fontSize='30'
                    onClick={()=>cambio2('BiHide')}
                />);
            setPass2('text');
            
        }else{
            setEye2(
                <BiShow id='show' className="clickeable" fontSize='30'
                    onClick={()=>cambio2('BiShow')}
                />
            );
            setPass2('password');
            
        }
    }

    const [pass,setPass] = useState('password');
    const [eye,setEye] = useState(
        <BiShow className="clickeable" fontSize='30'
            onClick={()=>cambio(eye.type.name)}
        />
    );
    const [pass2,setPass2] = useState('password');

    const [eye2,setEye2] = useState(
        <BiShow className="clickeable" fontSize='30'
            onClick={()=>cambio2(eye.type.name)}
        />
    );

    const navigate = useNavigate();

    function Revisa(nomb,apel,fono,mail,pass,pess,carr){
        let con = new conexion();
        const cock = new Cookies();
        let user = cock.get('Datos');
        if(nomb !== ''){
            let Ndat = {
                "nombre":nomb
            }
            //console.log('cambio en nombre');
            con.cambiaClave(user.rut,Ndat);
        }
        if(apel !== ''){
            let Ndat = {
                "apellido":apel
            }
            //console.log('cambio en apellido');
            con.cambiaClave(user.rut,Ndat);
        }
        if(fono !== ''){
            let Ndat = {
                "fono":fono
            }
            //console.log('cambio en fono');
            con.cambiaClave(user.rut,Ndat);
        }
        if(mail !== ''){
            let Ndat = {
                "correo":mail
            }
            //console.log('cambio en correo');
            con.cambiaClave(user.rut,Ndat);
        }
        if(revisapass(pass,pess)){
            if(pass !== ''){
                let Ndat = {
                    "clave":CryptoJS.SHA256(pass).toString()
                }
                //console.log('Cambio de clave');
                con.cambiaClave(user.rut,Ndat);
            }
        }
        if(carr !== 0){
            let Ndat = {
                "carrera":carr
            }
            //console.log('cambio en carrera');
            con.cambiaCarrera(user.rut,Ndat);
        }
    }

    function revisapass(pass1,pass2){
        return (pass1 === pass2) && (pass1 !== '' || pass1 !== '');
    }

    
    let nombre = useRef();
    let apelli = useRef();
    let nofono = useRef();
    let correo = useRef();
    let passi1 = useRef();
    let passi2 = useRef();
    let carrer = useRef();

    let [samepass,setSamepass] = useState(true);
    
    return(
        <div id="page" className="site login-show">
            <div className="container">
                <div className="wrapper">
                    <div className="login">
                        <Heading   
                            wel={
                            (   
                                <h2 className="Titulo">
                                    Datos de<br/> 
                                    la cuenta
                                </h2>
                            )
                        }
                        logo2={
                            (
                                <h2 className="welcome"><FaUserGraduate size="150" /></h2>
                            )
                        }
                        />    
                        <div className="content-form">
                            <div className="y-style">
                                <form action="">
                                    <div className="userInput">
                                        <div className="userInputContent">
                                            <div className="IconSide centrado">
                                                <BiUser fontSize='25'/>
                                            </div>
                                            <div className="InputSide centrado">
                                                <input ref={nombre} className="userInputText" type="text" placeholder=" Ingresa tu nombre"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="userInput">
                                        <div className="userInputContent">
                                            <div className="IconSide centrado">
                                                <BiUser fontSize='25'/>
                                            </div>
                                            <div className="InputSide centrado">
                                                <input ref={apelli} className="userInputText" type="text" placeholder=" Ingresa tu apellido"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="userInput">
                                        <div className="userInputContent">
                                            <div className="IconSide centrado">
                                                <FaPhoneAlt fontSize='20'/>
                                            </div>
                                            <div className="InputSide centrado">
                                                <input ref={nofono} className="userInputText" type="text" placeholder=" Ingresa tu N° de telefono"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="userInput">
                                        <div className="userInputContent">
                                            <div className="IconSide centrado">
                                                <AiOutlineMail fontSize='25'/>
                                            </div>
                                            <div className="InputSide centrado">
                                                <input onChange={
                                                    ev=>{
                                                        ev.preventDefault();
                                                    }
                                                } ref={correo} className="userInputText" type="email" placeholder=" Ingresa tu correo"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="userInput">
                                        <div className="userInputContent">
                                            <div className="IconSide centrado">
                                                <AiOutlineLock fontSize="25"/>
                                            </div>
                                            <div className="InputSide centrado">
                                                <input ref={passi1} className="userInputText" type={pass} placeholder=" Ingresa tu contraseña"/>
                                            </div>
                                            <div className="IconSide centrado">
                                                {eye}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="userInput">
                                        <div className="userInputContent">
                                            <div className="IconSide centrado">
                                                <AiOutlineLock fontSize="25"/>
                                            </div>
                                            <div className="InputSide centrado">
                                                <input onChange={ev=>{setSamepass(revisapass(passi1.current.value,passi2.current.value))}} ref={passi2} className="userInputText" type={pass2} placeholder=" Repite tu contraseña"/>
                                            </div>
                                            <div className="IconSide centrado">
                                                {eye2}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="userInput">
                                        <div className="userInputContent" ref={carrer}>
                                            <FaUniversity fontSize='25'/>
                                            <Carreras/>
                                        </div>
                                    </div>
                                    <p className="badText" hidden={samepass}>las contraseñas no coinsiden</p>
                                    <button onClick={
                                        ev=>{
                                            ev.preventDefault();
                                            Revisa(
                                                nombre.current.value,
                                                apelli.current.value,
                                                nofono.current.value,
                                                correo.current.value,
                                                passi1.current.value,
                                                passi2.current.value,
                                                parseInt(carrer.current.childNodes[1].childNodes[0].childNodes[0].id)
                                                );
                                            toast.success('La modificacion fué exitosa', {
                                                position:toast.POSITION.TOP_CENTER,
                                                autoClose: 5000,
                                                onClose:()=>{
                                                    setTimeout(() => {
                                                        navigate("/UserProf");
                                                    }, 5200);
                                                }
                                            });
                                        }
                                    } className="Iniciar" type="sumbit">Confirmar cambios
                                        
                                    </button>
                                </form>
                                <button 
                                    onClick={
                                        ev=>{
                                            /*Boton para volver*/
                                            ev.preventDefault();
                                            navigate('/UserProf');//eso redirige a la ruta especificada
                                        }
                                    }
                                    onMouseOver={(e) => e.target.title = 'Volver'} 
                                    id='BtnLogIn' className="GoBack centrado" type="sumbit">
                                    <IoMdArrowRoundBack size={60}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
            <Outlet/>
        </div>
    )
}

export default UpUser