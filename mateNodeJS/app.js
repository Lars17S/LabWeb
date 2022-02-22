const mateBasica = require('./mate')
const readline = require('readline')

console.log("Operaciones disponibles: 1) suma, 2) resta, 3) producto, 4) division, 5) modulo")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

rl.question("Opción: ", optionSelInput => {
  rl.question("Primer número input: ", numA => {
    rl.question("Segundo número input: ", numB => {
      switch (optionSelInput) {
        case '1':
          console.log(`La suma de ${numA} + ${numB} es ${mateBasica.suma(Number(numA), Number(numB))}`);
          break;
        case '2':
          console.log(`La resta de ${numA} - ${numB} es ${mateBasica.resta(Number(numA), Number(numB))}`);
          break;
        case '3':
          console.log(`El producto de ${numA} * ${numB} es ${mateBasica.producto(Number(numA), Number(numB))}`);
          break;
        case '4':
          if (numB !== '0')
            console.log(`La división de ${numA} / ${numB} es ${mateBasica.division(Number(numA), Number(numB))}`);
          else
            console.log('No es posible división entre 0');
          break;
        case '5':
          if (numB !== '0')
            console.log(`El módulo de ${numA} mod ${numB} es ${mateBasica.modulo(Number(numA), Number(numB))}`);
          else
            console.log('No es posible obtener el módulo para 0');
          break;
        default:
          console.log('Opción invalida');
      }

      rl.close();
    })
  })
  
})

rl.on("close", function() {
  console.log("End");
  process.exit(0);
});



