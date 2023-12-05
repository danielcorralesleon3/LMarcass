const fs = require('fs');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('Escribe la ruta del fichero ', function(fichero) {
    fs.readFile(fichero, 'utf8', function(error, data) {
       if (error){
        console.log(`error al leer el archivo`)
    } else{console.log(data);}
    });
});

