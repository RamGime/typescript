// type Operator = "suma" | "resta" | "multiplicación" | "división";

// function calcular(num1: number, num2: number, operacion: Operator): number {
//     switch (operacion) {
//         case "suma":
//             return num1 + num2;
//         case "resta":
//             return num1 - num2;
//         case "multiplicación":
//             return num1 * num2;
//         case "división":
//             if (num2 === 0) {
//                 throw new Error("No se puede dividir por cero");
//             }
//             return num1 / num2;
//         default:
//             throw new Error("Operación no válida");
//     }
// }

// function obtenerNumero(mensaje: string): number {
//     const input = prompt(mensaje);
//     if (input === null) {
//         throw new Error("Entrada cancelada por el usuario");
//     }
//     const num = parseFloat(input);
//     if (isNaN(num)) {
//         throw new Error("Valor no válido");
//     }
//     return num;
// }

// function obtenerOperacion(): Operator {
//     const operacionInput = prompt("Ingrese la operación (suma, resta, multiplicación, división):");
//     if (operacionInput === null) {
//         throw new Error("Entrada cancelada por el usuario");
//     }
//     const operacion = operacionInput.toLowerCase() as Operator;
//     if (operacion !== "suma" && operacion !== "resta" && operacion !== "multiplicación" && operacion !== "división") {
//         throw new Error("Operación no válida");
//     }
//     return operacion;
// }

// try {
//     const num1 = obtenerNumero("Ingrese el primer número:");
//     const num2 = obtenerNumero("Ingrese el segundo número:");
//     const operacion = obtenerOperacion();
    
//     const resultado = calcular(num1, num2, operacion);
//     console.log("Resultado:", resultado);
// } catch (error) {
//     console.error("Error:", (error as Error).message);
// }
