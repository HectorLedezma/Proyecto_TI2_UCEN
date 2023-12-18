import { BiExit } from "react-icons/bi";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function MenuOpci(){
    let nav = useNavigate();
    return(
        <div className='menuUsIcons centrado2'>
            <div className="clickeable mrg-r-10px menuUsIconItem">
                <FaUserEdit className='mrg-r-10px mrg-l-10px' size={40}/>
                <p className="menuUsIconText">Editar cuenta</p>
            </div>
            <div className="clickeable mrg-l-10px menuUsIconItem">
                <BiExit className='mrg-r-10px mrg-l-10px' size={40}/>
                <p className="menuUsIconText">Cerrar sesion</p>
            </div>
        </div>
    )
}

export default MenuOpci;