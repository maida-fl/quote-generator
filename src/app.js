const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../public'))); // le indica a Express que la carpeta de archivos públicos será public


// **** Template Engine ****
app.set('view engine', 'ejs'); // Define que el motor de plantillas que utilizamos es EJS
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta views

app.listen(3000, () => {
    console.log('Working on http://localhost:3000');
});

app.get('/', (req, res) => {
    res.render('index.ejs');
});
