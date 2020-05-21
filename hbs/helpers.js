const hbs = require('hbs');

// Helpers
hbs.registerHelper('getAnyo', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('capitalizar', (texto) => {
    return texto.toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
});