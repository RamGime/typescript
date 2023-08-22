// function celsiusToFahrenheit(celsius: number): number {
//     return (celsius * 9 / 5) + 32;
// }

// function fahrenheitToCelsius(fahrenheit: number): number {
//     return (fahrenheit - 32) * 5 / 9;
// }

// const opcion = prompt("Seleccione una opción:\n1. Convertir de Celsius a Fahrenheit\n2. Convertir de Fahrenheit a Celsius");

// if (opcion === "1" || opcion === "2") {
//     const valorStr = prompt("Ingrese el valor a convertir:");

//     if (valorStr !== null) {
//         const valor = parseFloat(valorStr);

//         if (!isNaN(valor)) {
//             if (opcion === "1") {
//                 const resultado = celsiusToFahrenheit(valor);
//                 console.log(`${valor} grados Celsius son ${resultado.toFixed(2)} grados Fahrenheit.`);
//             } else {
//                 const resultado = fahrenheitToCelsius(valor);
//                 console.log(`${valor} grados Fahrenheit son ${resultado.toFixed(2)} grados Celsius.`);
//             }
//         } else {
//             console.log("Entrada no válida. Asegúrese de ingresar un número válido.");
//         }
//     } else {
//         console.log("Entrada cancelada por el usuario.");
//     }
// } else {
//     console.log("Opción no válida. Seleccione 1 o 2.");
// }
