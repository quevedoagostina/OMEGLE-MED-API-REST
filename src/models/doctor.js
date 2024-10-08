const { DataTypes } = require('sequelize');
const sequelize = require('./index').sequelize;
const User = require('./User'); // Asumiendo que ya tienes el modelo de Usuario definido

const Doctor = sequelize.define('Doctor', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  specialty: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: { // Relación con la tabla de usuarios
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User, // Hace referencia al modelo User
      key: 'id', // La clave foránea será el campo 'id' del modelo User
    },
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true, // Estado activo por defecto
  },
}, {
  timestamps: true, // Crea automáticamente los campos createdAt y updatedAt
});

module.exports = Doctor;
