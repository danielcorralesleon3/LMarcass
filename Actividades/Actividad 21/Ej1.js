const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Hola, cual es tu nombre? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Bienvenido a JavaScript, ${answer}`);

  rl.close();
});