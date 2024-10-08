const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

// Importar los modelos
const User = require('./User');
const Doctor = require('./Doctor');
const Patient = require('./Patient');
const Appointment = require('./Appointment');

// Definir relaciones
User.hasOne(Patient, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});
Patient.belongsTo(User, {
  foreignKey: 'userId',
});

User.hasOne(Doctor, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});
Doctor.belongsTo(User, {
  foreignKey: 'userId',
});

Patient.hasMany(Appointment, {
  foreignKey: 'patientId',
  onDelete: 'CASCADE',
});
Appointment.belongsTo(Patient, {
  foreignKey: 'patientId',
});

Doctor.hasMany(Appointment, {
  foreignKey: 'doctorId',
  onDelete: 'CASCADE',
});
Appointment.belongsTo(Doctor, {
  foreignKey: 'doctorId',
});

// Exportar los modelos y sequelize
module.exports = {
  sequelize,
  User,
  Doctor,
  Patient,
  Appointment,
};

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
