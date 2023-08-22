// function contarParesImpares(inicio: number, fin: number): { pares: number; impares: number } {
//     let pares = 0;
//     let impares = 0;

//     for (let num = inicio; num <= fin; num++) {
//         if (num % 2 === 0) {
//             pares++;
//         } else {
//             impares++;
//         }
//     }

//     return { pares, impares };
// }

// const rangoInicioStr = prompt("Ingrese el inicio del rango:");
// const rangoFinStr = prompt("Ingrese el fin del rango:");

// if (rangoInicioStr === null || rangoFinStr === null) {
//     console.log("Entrada cancelada por el usuario.");
// } else {
//     const rangoInicio = parseInt(rangoInicioStr);
//     const rangoFin = parseInt(rangoFinStr);

//     if (isNaN(rangoInicio) || isNaN(rangoFin)) {
//         console.log("Entrada no válida. Asegúrese de ingresar números válidos.");
//     } else {
//         const resultado = contarParesImpares(rangoInicio, rangoFin);
//         console.log(`En el rango de ${rangoInicio} a ${rangoFin}:`);
//         console.log(`Cantidad de números pares: ${resultado.pares}`);
//         console.log(`Cantidad de números impares: ${resultado.impares}`);
//     }
// }
