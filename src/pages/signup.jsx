import React, { useRef, useState } from "react";
import "../styles/styleSignup.css";
import { Link, Outlet, useNavigate} from "react-router-dom";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { BiHide, BiShow, BiUser } from "react-icons/bi";
import user from '../pages/users.json'
import CryptoJS from 'crypto-js';


function Signup(){
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
    localStorage.setItem('Tokken',false)

    const navigate = useNavigate();

    function Revisa(nomb,apel,mail,pass,pess){
        //chekear usuario
        const existe = mail in user;
        //chekear pass
        const confir = revisapass(pass,pess);
        if(!existe && confir){
            let Nuser = {
                "Mail":mail,
                "Nombre":nomb,
                "Apellido":apel,
                "Pass":CryptoJS.SHA256(pass).toString(),
                "Type":"0"
            }
            alert('Usuario '+nomb+' '+apel+'\nse ha creado con exito');
            navigate("/");
            
            //console.log(his);

        }
    }

    function existeUs(mail){
        const existe = mail in user;
        return !existe;
    }

    function revisapass(pass1,pass2){
        return pass1 === pass2;
    }

    let nombre = useRef();
    let apelli = useRef();
    let correo = useRef();
    let passi1 = useRef();
    let passi2 = useRef();

    let [samepass,setSamepass] = useState(true);
    let [newCorreo,SetNew] = useState(true);


    

    return(
        <div id="page" className="site login-show">
            <div className="container">
                <div className="wrapper">
                    <div className="login">
                        <div className="content-heading">
                            <div className="y-style">
                                <div className="welcome">
                                    <div className="welcome">
                                        <h2 className="Titulo">
                                            Datos de<br/> 
                                            la cuenta
                                        </h2>
                                    </div>
                                    <div className="logo">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-form">
                            <div className="y-style">
                                <form action="">
                                    <div className="userInput">
                                        <div className="userInputContent">
                                            <div className="IconSide centrado">
                                                <BiUser fontSize='30'/>
                                            </div>
                                            <div className="InputSide centrado">
                                                <input ref={nombre} className="userInputText" type="text" placeholder="Ingresa tu nombre"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="userInput">
                                        <div className="userInputContent">
                                            <div className="IconSide centrado">
                                                <BiUser fontSize='30'/>
                                            </div>
                                            <div className="InputSide centrado">
                                                <input ref={apelli} className="userInputText" type="text" placeholder="Ingresa tu apellido"/>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="badText" hidden={newCorreo}>Ese correo ya existe</p>
                                    <div className="userInput">
                                        <div className="userInputContent">
                                            <div className="IconSide centrado">
                                                <AiOutlineMail fontSize='30'/>
                                            </div>
                                            <div className="InputSide centrado">
                                                <input onChange={
                                                    ev=>{
                                                        ev.preventDefault();
                                                        SetNew(existeUs(correo.current.value));
                                                    }
                                                } ref={correo} className="userInputText" type="email" placeholder="Ingresa tu correo"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="userInput">
                                        <div className="userInputContent">
                                            <div className="IconSide centrado">
                                                <AiOutlineLock fontSize="30"/>
                                            </div>
                                            <div className="InputSide centrado">
                                                <input ref={passi1} className="userInputText" type={pass} placeholder="Ingresa tu contraseña"/>
                                            </div>
                                            <div className="IconSide centrado">
                                                {eye}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="userInput">
                                        <div className="userInputContent">
                                            <div className="IconSide centrado">
                                                <AiOutlineLock fontSize="30"/>
                                            </div>
                                            <div className="InputSide centrado">
                                                <input onChange={ev=>{setSamepass(revisapass(passi1.current.value,passi2.current.value))}} ref={passi2} className="userInputText" type={pass2} placeholder="Repite tu contraseña"/>
                                            </div>
                                            <div className="IconSide centrado">
                                                {eye2}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="badText" hidden={samepass}>las contraseñas no coinsiden</p>
                                    <button onClick={
                                        ev=>{
                                            ev.preventDefault();
                                            Revisa(
                                                nombre.current.value,
                                                apelli.current.value,
                                                correo.current.value,
                                                passi1.current.value,
                                                passi2.current.value
                                                );

                                        }
                                    } className="Iniciar" type="sumbit">Crear cuenta</button>
                                </form>
                                <div className="afterform">
                                    <p>¿Ya tienes una cuenta?</p>
                                    {/**<a onClick={toSignup} className="t-signup">Registrate</a> */}
                                    <Link to='/'>Inicia sesion</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}

export default Signup