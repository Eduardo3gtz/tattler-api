const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config({ path: './.env' });
connectDB();

const app = express();
// Middleware para aceptar JSON
app.use(express.json());

const PORT = 5000;

app.use('/api/restaurants', require('./routes/restaurants'));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});