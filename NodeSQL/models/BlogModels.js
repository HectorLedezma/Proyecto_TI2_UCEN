import { DataTypes } from 'sequelize';
import db from '../database/db.js';

//import {DataTypes} from 'sequelize';

export const BikeModel = db.define('transporte',
    {
        'id_t':{
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey:true
        },
        'est_trans':{
            type:DataTypes.TINYINT,
            allowNull:false,
            primaryKey:false
        },
        'rut_e':{
            type:DataTypes.STRING,
            allowNull:true,
            primaryKey:true
        },
        'principal':{
            type:DataTypes.TINYINT,
            allowNull:true,
            primaryKey:false
        }
    },{
        timestamps: false,
        tableName: 'transporte'
    }
)


export const UserModel = db.define('usuario',
    {
        'rut':{
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey:true
        },
        'nombre':{
            type:DataTypes.STRING,
            allowNull:true,
            primaryKey:false
        },
        'apellido':{
            type:DataTypes.STRING,
            allowNull:true,
            primaryKey:false
        },
        'fono':{
            type:DataTypes.STRING,
            allowNull:true,
            primaryKey:false
        },
        'correo':{
            type:DataTypes.STRING,
            allowNull:true,
            primaryKey:false
        },
        'estado':{
            type:DataTypes.INTEGER,
            allowNull:true,
            primaryKey:false
        },
        'clave':{
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey:false
        }
    },{
        timestamps: false,
        tableName: 'usuario'
    }
)

export const UserEsModel = db.define('estudiante',
    {
        'rut_e':{
            type:DataTypes.STRING,
            primaryKey:true,
            allowNull:false
        },
        'carrera':{
            type:DataTypes.INTEGER,
            primaryKey:false,
            allowNull:true
        }
    },{
        timestamps: false,
        tableName: 'estudiante'
    }
)

export const CarreraModel = db.define('Carrera',
    {},{
        timestamps: false,
        tableName: 'Carrera'
    } 
)

export const HistModel = db.define('ingreso_egreso',
    {},{
        timestamps: false,
        tableName: 'ingreso_egreso'
    }
)

export const LostModel = db.define('Perdido',
{
    'Objeto':{
        type:DataTypes.STRING,
        allowNull:true,
        primaryKey:false
    },
    'FecEncontrado':{
        type:DataTypes.DATE,
        allowNull:true,
        primaryKey:false
    },
    'HrEncontrado':{
        type:DataTypes.TIME,
        allowNull:true,
        primaryKey:false
    }

},{
    timestamps: false,
    tableName: 'Perdido'
})