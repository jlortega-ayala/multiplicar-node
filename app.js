const { argv } = require('./config/yargs'); // o const argv = require('./config/yargs').argv;
const colors = require('colors');

// const fs = require('fs');            Paquetes nativos de Node.
// const fs = require('express');       Paquetes no nativos de Node.
// const fs = require('./fs');          Paquetes creados por nosotros.

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log(`Archivo creado:` + colors.blue(archivo));
            })
            .catch(err => {
                console.log(err);
            });
        break;

    default:
        console.log('Comando no reconocido');
}


// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];