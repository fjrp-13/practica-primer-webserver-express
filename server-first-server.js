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

const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hola Mundo')
});
app.get('/json', function(req, res) {
    let salida = {
        nombre: 'Fran',
        url: req.url
    };
    res.send(salida);
});
app.get('/data', function(req, res) {
    res.send('Hola Data')
})

app.listen(3000, () => { console.log('Escuchando peticiones en el puerto 3000'); });