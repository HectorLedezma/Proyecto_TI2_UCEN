import db from '../database/db.js';

import {DataTypes} from 'sequelize';

export const UserModel = db.define('usuario',
    {},{
        timestamps: false,
        tableName: 'usuario'
    }
)

