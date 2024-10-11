const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

const db = {};

// Agregar la instancia de sequelize al objeto db
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Importar el modelo User y pasar la instancia de sequelize
db.User = require('./user')(sequelize, Sequelize.DataTypes);

// Exportar todos los modelos y la conexión sequelize
module.exports = db;
