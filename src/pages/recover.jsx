import { useRef} from 'react';
import { Outlet, useNavigate} from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";
import Heading from '../Componentes/heading';
import { FaQuestionCircle } from "react-icons/fa";
import '../styles/styleSignup.css';
import { BiUser } from 'react-icons/bi';
import { conexion } from '../ConectionSQL/conexion';
import { ToastContainer, toast } from 'react-toastify';
import { Nodocorreo } from '../NodeMailer/conexion.js';
import { useState } from 'react';
import CryptoJS from 'crypto-js';

/*
async function Correo(mail){

    const nodemailer = require('nodemailer');
    const config = {
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user:'qrcleta.ucentral@gmail.com',
            pass:'hnga jbij wnpd haih'
        }
    }

    //proyectointegrador2QRcleta_mail
    const transport = nodemailer.createTransport(config);
    const mensaje = {
        from:'qrcleta.ucentral@gmail.com',
        to:mail,
        subject:'Recuperación de contraseña',
        text:'Hola inmundo'
    }
    const info = await transport.sendMail(mensaje);
    console.log(info.accepted)
}
*/

function Rando(minimo, maximo) {
    var numeroAleatorio = Math.random() * (maximo - minimo) + minimo;
    return Math.floor(numeroAleatorio);
}

function Ascii(num){
    return String.fromCharCode(num);
}

function creaPass(){
    const lim = 12;
    const min = 97;
    const max = 122;
    let code = '';
    for(let i = 0;i<lim;i++){
        code = code+Ascii(Rando(min,max));
    }
    return code;
}

function validaRut(rut){
    let ok = false;
    let spg = rut.replace(/[.-]/g, '');
    let snd = spg.slice(0, -1);
    let r_u_t = snd.split("")
    let t_u_r = r_u_t.reverse();
    let tur = t_u_r.join("");
    
    let multi = 2;
    let sum = 0;
    for(let i = 0;i<tur.length;i++){
        if(multi > 7){
            multi = 2;
        }
        //console.log(tur[i]);
        sum = sum+parseInt(tur[i]*multi);
        multi = multi+1;
    }
    
    let dv = 11-(sum%11);
    let dvu = rut[rut.length-1];
    if(dvu === 'k' || dvu === 'K'){
        dvu = dvu.toUpperCase();
    }
    //console.log('dvu: ',dvu);
    if(dv===11){
        dv = "0";
    }else if(dv === 10){
        dv="K";
    }
    //console.log('dv: ',dv);
    if(String(dv) === dvu){
        ok = true;
    }else{
        ok = false
    }
    return ok;
}


function Send(rut,mail,val,nav){//Funcion Para enviar correo
    let con = new conexion();
    if(val){
        con.leer(rut).then(data=>{
            if(String(data.correo) === mail){
                const npas = creaPass();
                console.log('Nueva Clave: ',npas);
                const CryptoNpas = CryptoJS.SHA256(npas).toString();
                const NM = new Nodocorreo();
                toast.loading("Procesando tu solicitud...",{position:toast.POSITION.TOP_CENTER});
                NM.enviar(mail,npas)
                let datos = {"clave":CryptoNpas};
                
                con.cambiaClave(rut,datos);
                nav("/recoverOk");
                /*
                toast.success('Se envió un correo con la nueva contraseña',{position:toast.POSITION.TOP_CENTER,
                    autoClose: 5000,
                    onClose:()=>{
                        
                    }});*/
            }
        }).catch((error)=>{
            toast.error('Error',{position:toast.POSITION.TOP_CENTER})
            console.log(error);
        });
    }else{
        toast.error('Error',{position:toast.POSITION.TOP_CENTER})
    }
}

function Recupera(){
    let mailRef = useRef();
    let rutRef = useRef();
    const navigate = useNavigate();
    const [rut,setRut] = useState(false);
    return(
        <div>
            <div id="page" className="site login-show">
                <div className="container">
                    <div className="wrapper">
                        <div className="login">
                            <Heading 
                                wel={
                                    (<h2 className="Titulo">
                                        Recuperar<br/>contraseña
                                    </h2>)
                                }
                            />
                            <div className="content-form">
                                <div className="y-style" style={{'margin-top':'-70px'}}>
                                    {/*Contenido de la pagina */}
                                    <div className='Mcolor'>
                                        <FaQuestionCircle size={70}/>
                                    </div>
                                    <h3 className='encabezado'>
                                        ¿Olvidaste tu contraseña?<br/>
                                        No te preocupes, es posible recuperarla
                                    </h3>
                                    <form action="" >
                                        <h4 className='encabezado'>
                                            Solo ingresa tu correo y tu rut
                                        </h4>
                                        <div className="userInput">
                                            <div className="userInputContent">
                                                <div className="IconSide centrado">
                                                    <AiOutlineMail fontSize="30"/>
                                                </div>
                                                <div className="InputSide centrado">
                                                    <input autoComplete="off" ref={mailRef} id="InputCorreo" className="userInputText" type="email" placeholder="  Ingresa tu correo"/>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="badText" hidden={rut}>Ingrese un rut valido</p>
                                        <div className="userInput">
                                            <div className="userInputContent">
                                                <div className="IconSide centrado">
                                                    <BiUser fontSize="30"/>
                                                </div>
                                                <div className="InputSide centrado" onChange={
                                                    ev=>{
                                                        ev.preventDefault();
                                                        setRut(validaRut(rutRef.current.value));
                                                    }
                                                }>
                                                    <input autoComplete="off" ref={rutRef} id="InputCorreo" className="userInputText" type="text" placeholder="  Ingresa tu RUT"/>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <button onClick={
                                            ev=>{
                                                ev.preventDefault();
                                                Send(rutRef.current.value, mailRef.current.value,rut,navigate);
                                                //navigate('/recoverOk');
                                            }
                                        } id='BtnLogIn' className="Iniciar" type="sumbit">Recuperar</button>
                                        <div className='welcome'>
                                            <button 
                                                onClick={
                                                    ev=>{
                                                        ev.preventDefault();
                                                        navigate('/')
                                                    }
                                                }
                                                onMouseOver={(e) => e.target.title = 'Volver'} 
                                            id='BtnLogIn' className="GoBack centrado" type="sumbit">
                                                <IoMdArrowRoundBack size={60}/>
                                            </button>
                                        </div>
                                    </form>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <ToastContainer/>
                <Outlet/>
            </div>
        </div>
    );
}

export default Recupera;