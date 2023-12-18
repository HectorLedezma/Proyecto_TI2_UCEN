import { Outlet, useNavigate} from "react-router-dom";
//import { conexion } from "../ConectionSQL/conexion";
import { IoMdArrowRoundBack } from "react-icons/io";
import Heading from "../Componentes/heading";
import '../styles/profile.css'
import UserMenu from '../Componentes/UserMenu';
import "../styles/styleUser.css"
import { IoSchoolOutline } from "react-icons/io5";
import { TbWorldHeart } from "react-icons/tb";
import { TbCalendarTime } from "react-icons/tb";
import { FaClock, FaQuestion, FaUniversity} from "react-icons/fa";
import Cookies from 'universal-cookie';
import { MdPedalBike } from 'react-icons/md';
import { conexion } from "../ConectionSQL/conexion";
import { FaHeartCircleCheck } from "react-icons/fa6";
import MenuOpci from "../Componentes/MenuOp";


function TraeData(nav){
    let cock = new Cookies();
    let datos = cock.get("Datos");
    let con = new conexion();
    con.leerB(datos.rut).then(data =>{
        //cock.set('BiciData',data,{path:'/'});
        nav('/bicis');
    }).catch(error => {
        console.error("Error al leer los datos:", error);
    });
    
}

function UserProfile() {
    const navigate = useNavigate();
    let cock = new Cookies();
    return(
        <div id="page" className="site login-show">
            
            <div className="container">
                <div className="wrappr">
                    <div className="login">
                        <Heading wel={(
                            <div>
                                <h1 className="clrWhite">Perfil de Usuario</h1>
                            </div>
                        )} logo1={<div/>} logo2={<UserMenu userData={cock.get("Datos")}/>}/>
                        
                        <div className="content-form">
                            <div className="y-style">
                                {/*Espacio para componentes */}
                                <div className="afterform">
                                    <div className='welcome'>
                                
                                        <div className="linksContainer">
                                            
                                            <div className="Sitios">
                                                <div className="SitioItem clickeable" onClick={ev=>{
                                                    ev.preventDefault();
                                                    TraeData(navigate);
                                                }}>
                                                    <MdPedalBike className="SitioIcon" size={20}/>
                                                    <p className="SitioText">Bicis</p>
                                                </div>

                                                <div className="SitioItem clickeable" onClick={ev=>{
                                                    ev.preventDefault();
                                                    navigate('/qrCodeP')
                                                }}>
                                                    <FaHeartCircleCheck className="SitioIcon" size={20}/>
                                                    <p className="SitioText">Bici principal</p>
                                                </div>

                                                
                                            </div>

                                            <div className="Sitios">
                                                <div className="SitioItem clickeable" onClick={ev=>{
                                                    ev.preventDefault();
                                                    navigate('/history')
                                                }}>
                                                    <FaClock className="SitioIcon" size={20}/>
                                                    <p className="SitioText">Accesos</p>
                                                </div>

                                                <div className="SitioItem clickeable" onClick={ev=>{
                                                    ev.preventDefault();
                                                    navigate('/lost')
                                                }}>
                                                    <FaQuestion className="SitioIcon" size={20}/>
                                                    <p className="SitioText">Obj. perdidos</p>
                                                </div>

                                                
                                            </div>

                                            <div className="Sitios">
                                                <div className="SitioItem clickeable" onClick={ev=>{
                                                    ev.preventDefault();
                                                    window.location.href = 'https://aula2023.ucentral.cl/';
                                                }}>
                                                    <IoSchoolOutline className="SitioIcon" size={20}/>
                                                    <p className="SitioText">Aula Virtual</p>
                                                </div>

                                                <div className="SitioItem clickeable" onClick={ev=>{
                                                    ev.preventDefault();
                                                    window.location.href = "https://miucen.ucentral.cl/";
                                                }}>
                                                    <TbWorldHeart className="SitioIcon" size={20}/>
                                                    <p className="SitioText">Portal Ucen</p>
                                                </div>

                                                
                                            </div>

                                            <div className="Sitios">
                                                <div className="SitioItem clickeable" onClick={ev=>{
                                                    ev.preventDefault();
                                                    window.location.href = "http://servicios.ucentral.cl/horarioAlumno/";
                                                }}>
                                                    <TbCalendarTime className="SitioIcon" size={20}/>
                                                    <p className="SitioText">Horario</p>
                                                </div>

                                                <div className="SitioItem clickeable" onClick={ev=>{
                                                    ev.preventDefault();
                                                    window.location.href = "https://www.ucentral.cl/";
                                                }}>
                                                    <FaUniversity className="SitioIcon" size={20}/>
                                                    <p className="SitioText">ucentral.cl</p>
                                                </div>
                                            </div>
                                        </div>

                                        <button 
                                            onClick={
                                                ev=>{
                                                    /*Boton para volver*/
                                                    ev.preventDefault();
                                                    cock.remove('Datos');
                                                    navigate('/');//eso redirige a la ruta especificada
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
                </div>
                <MenuOpci/>
            </div>
            <Outlet/>
        </div>
    );
}

export default UserProfile;