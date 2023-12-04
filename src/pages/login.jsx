import { React, useRef, useState} from "react";
import "../styles/style.css";
import LogoU from '../images/Logo UCEN_R.COQUIMBO_.png'
import LogoCleta from '../images/QRcleta.png'
//import Mail from '../images/mail.png'
//import Pass from '../images/pass.png'
import { Link, Outlet, useNavigate} from "react-router-dom";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { BiShow, BiHide } from 'react-icons/bi'
import CryptoJS from 'crypto-js';
import Users from './users.json'

//import { conexion } from "../ConectionSQL/read";




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

    
    const navigate = useNavigate();

    function verificar(mail,pass,obj){
        try{
            let Cpass = CryptoJS.SHA256(pass).toString();
            
            //let con = new conexion();

            
            if(obj[mail].Pass === Cpass){
                navigate("/UserProf")
            }else{
            }
        }catch(ex){
            console.log('error en "Verificar()": '+String(ex));
        }
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
                                <form action="" >
                                    <div className="userInput">
                                        <div className="userInputContent">
                                            <div className="IconSide centrado">
                                                <AiOutlineMail fontSize="30"/>
                                            </div>
                                            <div className="InputSide centrado">
                                                <input autoComplete="off" ref={mailRef} id="InputCorreo" className="userInputText" type="email" placeholder="Ingresa tu correo"/>
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
                                    <Link to='' className="forgot">Recuperar contraseña</Link>
                                    <button onClick={
                                        ev=>{
                                            ev.preventDefault();
                                            verificar(
                                                mailRef.current.value,
                                                passRef.current.value,
                                                Users
                                            )
                                        }
                                    } id='BtnLogIn' className="Iniciar" type="sumbit">Iniciar sesión</button>
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