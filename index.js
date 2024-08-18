const express = require('express');
const app = express();
const port = 3000;

// Función para generar un número aleatorio de 10 dígitos
function generateRandomNumber() {
    return Math.floor(1000000000 + Math.random() * 9000000000);
}

// Ruta para obtener el número aleatorio
app.get('/random-number', (req, res) => {
    const randomNumber = generateRandomNumber();
    res.json({ randomNumber });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`API de números aleatorios escuchando en http://localhost:3000`);
});
