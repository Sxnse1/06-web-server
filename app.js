const express = require('express');
const app = express();
var hbs = require('hbs');
require('dotenv').config();

const port = process.env.PORT;

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

//Servir contenido estatico
app.use(express.static('public'));

app.get('/generic', (req, res)=>{
    res.render('generic');
});

app.get('/elements', (req, res)=>{
    res.render('elements');
});

app.get('/', (req, res)=>{
    res.render('home', {
        nombre: 'Cesar Alejandro',
        titulo: 'Curso de node'
    });
})

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/template/elements.hbs')
})

app.get('/hola-mundo', function (req, res) {
    res.send('Mi primer servidor');
})

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}/`)
});