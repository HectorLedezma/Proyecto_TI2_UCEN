import { React } from "react";
import "../styles/style.css";
import LogoU from '../images/Logo UCEN_R.COQUIMBO_.png'
import LogoCleta from '../images/QRcleta.png'
import { Link, Outlet} from "react-router-dom";
/*
import Routes from "../Routes";

function toSignup(){
    console.log('A')
}
*/
function Login(){

    

    return(
        <div id="page" className="site login-show">

            

            <div className="container">
                <div className="wrapper">
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
                                <form action="">
                                    <p>
                                        <label>Correo</label>
                                        <input className="userInput" type="email" placeholder="Ingresa tu correo"/>
                                    </p>
                                    <p>
                                        <label>Contraseña</label>
                                        <input className="userInput" type="password" placeholder="Ingresa tu contraseña"/>
                                    </p>
                                    <p className="check">

                                        <input type="checkbox" id="remember"/>
                                        <label>Recuérdame</label>
                                    </p>
                                    <p className="forgot"><a href="">Recuperar contraseña</a></p>
                                    <p><button type="sumbit">Iniciar sesión</button></p>
                                </form>
                                <div className="afterform">
                                    <p>¿No tienes una cuenta?</p>
                                    {/**<a onClick={toSignup} className="t-signup">Registrate</a> */}
                                    <Link to='/signup'>Registrate</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="signup">
                        <div className="content-heading">
                            <div className="y-style">
                                <div className="logo"><a href=""><span></span></a></div>
                                <div className="welcome">
                                    <h2>Registrate<br/>Ahora </h2>
                                    <p>Estacionamiento QR para bicicletas</p>
                                </div>
                            </div>
                        </div>
                        <div className="content-form">
                            <div className="y-style">
                                <form action="">
                                    <p>
                                        <label>Nombre completo</label>
                                        <input type="text" placeholder="Ingresa tu nombre completo"/>
                                    </p>
                                    <p>
                                        <label>Correo</label>
                                        <input type="email" placeholder="Ingresa tu correo"/>
                                    </p>
                                    <p>
                                        <label>Contraseña</label>
                                        <input type="password" placeholder="Ingresa tu contraseña"/>
                                    </p>
                                    <p><button type="sumbit">Registrarse</button></p>
                                </form>
                                <div className="afterform">
                                    <p>¿Ya tienes una cuenta?</p>
                                    
                                    {/*<a href="" className="t-login">Inicia Sesion</a>*/}
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