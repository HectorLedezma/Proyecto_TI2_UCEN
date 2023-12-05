import {react, useRef, useState} from 'react';
import { Link, Outlet, useNavigate} from "react-router-dom";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { BiShow, BiHide } from 'react-icons/bi'
import Heading from './heading';
import '../styles/styleSignup.css';


function Recupera(){
    let mailRef = useRef();
    let passRef = useRef();
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
    return(
        <div>
            <div id="page" className="site login-show">
                <div className="container">
                    <div className="wrapper">
                        <div className="login">
                            <Heading wel={
                                (
                                    <h2 className="Titulo">
                                        Recuperar<br/>contraseña
                                    </h2>
                                )
                            }/>
                            <div className="content-form">
                                <div className="y-style">
                                    {/*Contenido de la pagina */}
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
        </div>
    );
}

export default Recupera;