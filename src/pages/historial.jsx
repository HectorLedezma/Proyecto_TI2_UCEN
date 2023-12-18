import { Outlet, useNavigate} from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Heading from "../Componentes/heading";
import UserMenu from '../Componentes/UserMenu';
import "../styles/styleUser.css"
import Cookies from 'universal-cookie';
import { Historial } from "../ConectionSQL/conexion";
import MenuOpci from "../Componentes/MenuOp";

function HistMenu() {
    const navigate = useNavigate();
    let cock = new Cookies();
    //const bicis = TraeData(navigate);
    return(
        <div id="page" className="site login-show">
            
            <div className="container">
                <div className="wrappr">
                    <div className="login">
                        <Heading wel={
                            (
                                <div>
                                    <h1 className="clrWhite">Historial de<br/>entrada y salida</h1>
                                    {/* Contenido del perfil del usuario */}
                                </div>
                            )
                        } 
                        logo1={<div/>} 
                        logo2={<UserMenu userData={cock.get("Datos")}/>}/>
                        <div className="content-form">
                            <div className="y-style">
                                {/*Espacio para componentes */}
                                <div>
                                    <Historial rut={cock.get('Datos').rut}/>
                                </div>
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
                <MenuOpci/>
            </div>
            <Outlet/>
        </div>
    );
}

export default HistMenu;