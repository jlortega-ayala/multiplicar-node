const fs = require('fs');
const colors = require('colors');



let listarTabla = (base, limite) => {
    let data = '';

    console.log('===================='.red);
    console.log(`Tabla del ${base}`.red);
    console.log('===================='.red);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ${base} no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${base}.txt`);
            }
        })

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}