const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });
rl.question('¿Qué tipo de temperatura es, escribe C (Celsius) o F (Fahrenheit)? ', function(Grados) {
    rl.question('Escribe la cantidad de grados: ', function(answer) {
        
        answer = parseFloat(answer);

        if (Grados.toUpperCase() === 'C') {
            answer=(answer*9/5)+32;
            console.log(`Los grados Celsius son: ${answer}`);
        } else if (Grados.toUpperCase()==='F') {
            answer=(answer-32)*5/9;
            console.log(`Los grados Fahrenheit son: ${answer}`);
        } else {
            console.log('Temperatura incorrecta');
        }

        rl.close();
    });
});