import db from '../database/db.js';

import {DataTypes} from 'sequelize';

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

