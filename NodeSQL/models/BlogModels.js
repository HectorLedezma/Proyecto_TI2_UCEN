import db from '../database/db.js';

import {DataTypes} from 'sequelize';

const BlogModel = db.define('User')

export default BlogModel;