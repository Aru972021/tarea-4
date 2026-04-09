const express = require('express');
const app = express();
const puerto = 3000; // Puedes cambiar el número de puerto si lo deseas
// Ruta de inicio
app.get('/', (req, res) => {
res.send('¡Hola, mundo desde Express!');
});
// Iniciar el servidor
app.listen(puerto, () => {
console.log(`Servidor Express escuchando en el puerto ${puerto}`);
});
