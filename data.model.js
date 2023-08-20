// models.js
import { DataTypes } from 'sequelize';
import sequelize from './database.js';

const Data = sequelize.define('Data', {
  umidade: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  temperatura: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

export default Data;
