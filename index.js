const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());


// Función para generar un número aleatorio de 10 dígitos que no se repita
function generateUniqueRandomNumber() {
    let randomNumber;
    do {
        randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);
    } while (generatedNumbers.has(randomNumber));

    // Agregar el número al conjunto para evitar repeticiones
    generatedNumbers.add(randomNumber);

    return randomNumber;
}

// Ruta para obtener el número aleatorio
app.get('/random-number', (req, res) => {
    const randomNumber = generateRandomNumber();
    res.json({ randomNumber });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`API de números aleatorios escuchando en http://localhost:${port}`);
});
