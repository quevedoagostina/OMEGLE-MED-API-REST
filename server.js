const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('./src/routes/authRoutes');
const authenticateToken = require('./src/middleware/authMiddleware');

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

app.use('/users', authRoutes);

app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Accediste a una ruta protegida' });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
