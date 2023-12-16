import db from '../database/db.js';

//import {DataTypes} from 'sequelize';

export const BikeModel = db.define('transporte',
    {},{
        timestamps: false,
        tableName: 'transporte'
    }
)


export const UserModel = db.define('usuario',
    {},{
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