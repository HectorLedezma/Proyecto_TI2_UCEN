import React from 'react';

const UserMenu = ({ userData }) => {
return (
    <div className='clrWhite menuUs'>
      {/* Contenido del menú de usuario */}
        <h3>Bienvenido, {userData.nombre} {userData.apellido}</h3>
        <h3>RUT: {userData.rut}</h3>
        <h3>Correo: {userData.correo}</h3>
      {/* Otros elementos del menú */}
    </div>
    );
};

export default UserMenu;