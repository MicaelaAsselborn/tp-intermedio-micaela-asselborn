import cors from 'cors';
import express from 'express';
import path from 'path';
import 'dotenv/config';

import { connectDB } from './config/database';

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware para interpretar JSON
app.use(express.json());

// Habilita todas las peticiones cross-origin
app.use(cors());  

// Middleware para servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, '..', 'public')));

// Api de prueba
app.get('/api/salud', (req, res) => {
    res.json({status: 'OK', message: 'Api funcionando'})
});

// Conectar a MongoDB y luego iniciar el servidor HTTP
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT} 🚀`);
    });
  })