// const http = require('http');

// http.createServer((req, res) => {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         let salida = {
//             nombre: 'Fran',
//             url: req.url
//         };

//         //res.write('Hola Mundo');
//         res.write(JSON.stringify(salida));
//         res.end();
//     })
//     .listen(8080);

// console.log('Escuchando el puerto 8080');

const myName = 'Fran R.';
const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers.js');

const port = process.env.PORT || 3000;

// Middleware: instrucción o callback que se ejecutará siempre (da igual qué URL se solicite)
app.use(express.static(__dirname + '/public'));

// Express HBS
hbs.registerPartials(__dirname + '/views/partials', function(err) {});
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    let data = {
        nombre: myName,
        anyo: new Date().getFullYear()
    };
    res.render('home.hbs', data);
});
app.get('/about', function(req, res) {
    let data = {
        nombre: myName,
        anyo: new Date().getFullYear()
    };
    res.render('about', data);
});

app.listen(port, () => { console.log(`Escuchando peticiones en el puerto ${port}`); });