const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hola, es mi tarea de Programación distribuida!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});