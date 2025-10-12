// 1. Importar dependencias
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors'); // <--- 1. IMPORTAR CORS

// Cargar config
dotenv.config({ path: './.env' });
connectDB();

// 2. Configurar la app
const app = express();
app.use(cors()); // <--- 2. USAR CORS (Añadir permisos)
app.use(express.json()); // Middleware para aceptar JSON

const PORT = 5000;

// 3. Montar los Routers
app.use('/api/restaurants', require('./routes/restaurants'));

// 4. Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});