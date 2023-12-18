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
    {},{
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