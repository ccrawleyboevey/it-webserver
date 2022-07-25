import 'dotenv/config'
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const app = express();
const port = process.env.PORT;

// Servir contenido estático
app.use( express.static('public') );

app.get('/hola-mundo', (req, res) => {
  res.send('Hola mundo en su respectiva ruta');
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
  })

app.listen( port, () => {
    console.log(`Servidor web escuchando en http://localhost:${ port }`);
})