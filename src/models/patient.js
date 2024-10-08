const { DataTypes } = require('sequelize');
const sequelize = require('./index').sequelize;
const User = require('./User'); // Asumiendo que ya tienes el modelo de Usuario definido

const Patient = sequelize.define('Patient', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User, // Relación con el modelo User
      key: 'id',
    },
  },
}, {
  timestamps: true,
});

module.exports = Patient;
