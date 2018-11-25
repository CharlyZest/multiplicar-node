/* Multiplicar Core */

const fs = require('fs');

const colors = require('colors');

let listartTabla = (base, limite = 10) => {

    console.log('= = = = = = = = = ='.green);
    console.log(`Tabla del ${ base }`.green);
    console.log('= = = = = = = = = ='.green);
    
    for (let i = 1; i <= limite; i++) {
    
        let resultado = base * i;
    
        console.log(`${ base } * ${ i } = ${ resultado }`);
    
    }

};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido '${ base }' no es un numero`.red);
            return;
        }
        
        let data = '';
        
        for (let i = 1; i <= limite; i++) {
        
            let resultado = base * i;
        
            data += `${ base } * ${ i } = ${ resultado }\n`;
        
        }
        
        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err) 
                reject(err)
            else resolve(`tabla-${ base }.txt`);
        });

    });
}; 

module.exports = {
    crearArchivo,
    listartTabla
}
