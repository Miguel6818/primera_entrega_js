
//primera fución será saludar al profe//
let profeOtutor = prompt("Hola esta es mi primera entrega, quien está revisando la tarea?")

const saludaProfe = nombre=> console.log("hola, espero que estes bien " + profeOtutor+ ", para esta entrega haré tres funciones matematicas")
saludaProfe()

function operacionMatematica(opcion, num1, num2) {
    if (opcion === 'suma') {
        return num1 + num2;
    } else if (opcion === 'resta') {
        return num1 - num2;
    } else if (opcion === 'multiplicacion') {
        return num1 * num2;
    } else {
        return 'error';
    }
}

let resultados = []; // array para almacenar los resultados

let opcionElegida = prompt("Elija operación matemática (suma, resta, multiplicación) o escriba 'salir' para terminar");

while (opcionElegida !== 'salir') {
    const num1 = parseFloat(prompt("Coloque el primer número"));
    const num2 = parseFloat(prompt("Coloque el segundo número"));

    const resultado = operacionMatematica(opcionElegida, num1, num2);
    console.log("Resultado: " + resultado);

    // Almacenar el resultado en el array
    resultados.push(`Operación: ${opcionElegida} - Resultado: ${resultado}`);

    // Preguntar al usuario si quiere hacer otra operación o salir
    opcionElegida = prompt("Elija operación matemática (suma, resta, multiplicación) o escriba 'salir' para terminar");
}

// Mostrar todos los resultados almacenados en el array
alert("Resultados almacenados:" +resultados);
resultados.forEach((res, index) => {
    console.log(`${index + 1}. ${res}`);
});

console.log("Has salido del programa.");





