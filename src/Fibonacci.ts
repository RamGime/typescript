// function generarFibonacci(n: number): number[] {
//     const fibonacci: number[] = [];

//     if (n >= 1) {
//         fibonacci.push(0);
//     }
//     if (n >= 2) {
//         fibonacci.push(1);
//     }

//     for (let i = 2; i < n; i++) {
//         const nuevoNumero = fibonacci[i - 1] + fibonacci[i - 2];
//         fibonacci.push(nuevoNumero);
//     }

//     return fibonacci;
// }

// const nStr = prompt("Ingrese la cantidad de números de la secuencia de Fibonacci que desea generar:");

// if (nStr !== null) {
//     const n = parseInt(nStr);

//     if (!isNaN(n) && n >= 1) {
//         const secuenciaFibonacci = generarFibonacci(n);
//         console.log(`Los primeros ${n} números de la secuencia de Fibonacci:`);
//         console.log(secuenciaFibonacci);
//     } else {
//         console.log("Entrada no válida. Asegúrese de ingresar un número válido mayor o igual a 1.");
//     }
// } else {
//     console.log("Entrada cancelada por el usuario.");
// }
