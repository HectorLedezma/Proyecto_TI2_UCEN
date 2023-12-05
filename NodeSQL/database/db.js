import {Sequelize} from 'sequelize';
                      //(Nombre de DB,usuario,contraseña
const db = new Sequelize('QRcleta_test01','root','',{
    host:'localhost',
    dialect:'mysql',
    port:3030//puerto
})

export default db;
