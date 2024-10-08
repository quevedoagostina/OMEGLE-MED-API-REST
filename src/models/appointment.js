const { DataTypes } = require('sequelize');
const sequelize = require('./index').sequelize;
const Doctor = require('./Doctor');
const Patient = require('./Patient');

const Appointment = sequelize.define('Appointment', {
  doctorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Doctor, // Relación con el modelo Doctor
      key: 'id',
    },
  },
  patientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Patient, // Relación con el modelo Patient
      key: 'id',
    },
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'programada', // Estado inicial
  },
  details: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: true,
});

module.exports = Appointment;
