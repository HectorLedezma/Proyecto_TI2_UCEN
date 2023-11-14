import {react, useRef, useState, useEffect} from 'react';
import '../styles/profile.css'
function UserProfile(){

    let todoRef = useRef();

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      useEffect(() => {
        // Suscribirse al evento de cambio de tamaño de la ventana
        window.addEventListener('resize', handleResize);
    
        // Limpiar la suscripción al desmontar el componente
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);


    const responsivo = (w,h,donde) => {
        let clase = 'UserHead'
        let consulta = (Number(h)>(Number(w)-20));
        console.log(donde+'->'+w+' x '+h);
        if(consulta){
            clase = ['Perfil','UserHead','NombreUs'];
        }else{
            clase = ['PerfilNR','UserHeadNR','NombreUsNR'];
        }
        return clase;
//
    }

    const inicio = responsivo(windowSize.width,windowSize.height,'useState');
    const [claseH,setClaseH] = useState(inicio)
    //console.log(localStorage.getItem('Tokken'))
    return(
        <div ref={todoRef} className={responsivo(windowSize.width,windowSize.height,'0')[0]}>
            <div className={responsivo(windowSize.width,windowSize.height,'1')[1]}>
                <h2 className={responsivo(windowSize.width,windowSize.height,'2')[2]}>HOLA</h2>
            </div>
            <div className='pagina'>
                <div className='UserBody'>
                    <h1 onChange={
                        ev=>{
                            ev.preventDefault();
                            console.log('Cambio')
                        }
                    }>{windowSize.width}x{windowSize.height}</h1>
                </div>
                <div className='UserFoot'></div>
            </div>
        </div>
    );
}

export default UserProfile;