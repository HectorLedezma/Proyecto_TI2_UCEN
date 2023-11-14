import { React, useRef, useState} from "react";
import "../styles/style.css";
import LogoU from '../images/Logo UCEN_R.COQUIMBO_.png'
import LogoCleta from '../images/QRcleta.png'
//import Mail from '../images/mail.png'
//import Pass from '../images/pass.png'
import { Link, Outlet} from "react-router-dom";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { BiShow, BiHide } from 'react-icons/bi'
import CryptoJS from 'crypto-js';
import Users from './users.json'

function Login(){
    
    let mailRef = useRef();
    let passRef = useRef();
    //let iconRef = useRef();

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

    const [pass,setPass] = useState('password');
    const [eye,setEye] = useState(
        <BiShow className="clickeable" fontSize='30'
            onClick={()=>cambio(eye.type.name)}
        />
    );

    const [Log,setLog] = useState('/')
    
    function verificar(mail,pass,obj){
        let fin = '/';
        let tokken = false;
        try{
            let Cpass = CryptoJS.SHA256(pass).toString();
            console.log(pass+': '+Cpass)
            if(obj[mail].Pass === Cpass){
                tokken = true;
                fin = '/UserProf';
            }else{
                fin = '/';
                tokken = false;
            }
        }catch(ex){
            console.log('error: '+String(ex));
            fin = '/';
            tokken = false;
        }
        localStorage.setItem('Tokken',tokken);
        console.log(fin)
        console.log(localStorage.getItem('Tokken'))
        return fin;
    }
    localStorage.setItem('Tokken',false);
    return(
        <div id="page" className="site login-show">
            
            <div className="container">
                <div className="wrappr">
                    <div className="login">
                        <div className="content-heading">
                            <div className="y-style">
                                <div className="logo">
                                    <img className="ImgLogoU" src={LogoU} alt="Logo"></img>
                                </div>
                                <div className="welcome">
                                    <h2>
                                        Estacionamiento QR<br/> 
                                        para bicicletas
                                    </h2>
                                </div>
                                <div className="logo">
                                    <img className="ImgLogoP" src={LogoCleta} alt="Logo"></img>
                                </div>
                            </div>
                        </div>
                        <div className="content-form">
                            <div className="y-style">
                                <h1>Bienvenido</h1>
                                <form action="" 
                                    onChange={
                                        ev=>{
                                            ev.preventDefault()
                                            setLog(verificar(
                                                mailRef.current.value,
                                                passRef.current.value,
                                                Users
                                            ))
                                        }
                                    }
                                >
                                    <div className="userInput">
                                        <div className="userInputContent">
                                            <div className="IconSide centrado">
                                                <AiOutlineMail fontSize="30"/>
                                            </div>
                                            <div className="InputSide centrado">
                                                <input ref={mailRef} id="InputCorreo" className="userInputText" type="email" placeholder="Ingresa tu correo"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="userInput">
                                        <div className="userInputContent">
                                            <div className="IconSide centrado">
                                                <AiOutlineLock fontSize="30"/>
                                            </div>
                                            <div className="InputSide centrado">
                                                <input ref={passRef} id="InputPassword" className="userInputText" type={pass} placeholder="Ingresa tu contraseña"/>
                                            </div>
                                            <div className="IconSide centrado">
                                                {eye}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="check">

                                        <input type="checkbox" id="remember"/>
                                        <label>Recuérdame</label>
                                    </p>
                                    <p className="forgot">Recuperar contraseña</p>
                                    <Link to={
                                        Log
                                    }>
                                        <button id='BtnLogIn' className="Iniciar" type="sumbit">Iniciar sesión</button>
                                    </Link>
                                </form>
                                <div className="afterform">
                                    <p>¿No tienes una cuenta?</p>
                                    {/**<a onClick={toSignup} className="t-signup">Registrate</a> */}
                                    <Link to='/signup'>Registrate</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Outlet/>
        </div>
    );
}

export default Login;