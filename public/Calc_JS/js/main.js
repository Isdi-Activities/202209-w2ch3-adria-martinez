import { sum, substract, multiply, divide } from "./utils/calculations.js";

const results = [];
let inputsUser = [];
const calculate = () => {
  const sizeInputs = inputsUser.length;
  if (sizeInputs === 1) {
    const sqrtResult = Math.sqrt(inputsUser[0]).toFixed(3);
    const result = { sqrt: sqrtResult };
    results.push(result);
    showResults();
  } else if (sizeInputs > 1) {
    const result = {
      sum: sum(...inputsUser),
      sub: substract(...inputsUser),
      mul: multiply(...inputsUser),
      div: divide(...inputsUser),
    };
    results.push(result);
  }
  showResults();

  askAgain();
};
const showResults = () => {
  console.clear();
  results.forEach((result) => {
    console.log(`Operación: ${results.indexOf(result) + 1}`);
    console.log("---------------------------------");
    if (result.sum !== undefined)
      console.log(`El resultado de la suma es: ${result.sum}`);
    if (result.sub !== undefined)
      console.log(`El resultado de la resta es: ${result.sub}`);
    if (result.mul !== undefined)
      console.log(`El resultado de la multiplicación es: ${result.mul}`);
    if (result.div !== undefined)
      console.log(`El resultado de la división es: ${result.div}`);
    if (result.sqrt !== undefined)
      console.log(`El resultado de la raiz cuadrada es: ${result.sqrt}`);
    console.log("---------------------------------");
  });
};
const askUserNumbers = () => {
  const inputNumber = prompt(
    "Ingrese un número y haz click en 'Aceptar' para añadirlo // Pulse aceptar con el campo vacio para calcular // Si introduce un numero, se calculará la raiz cuadrada"
  );

  if (!Number.isNaN(inputNumber) && inputNumber !== "") {
    inputsUser.push(Number(inputNumber));
    askUserNumbers();
  } else if (inputNumber === "") {
    calculate();
  }
};
const askAgain = () => {
  const input = prompt("¿Desea calcular otro número? (s/n)");
  if (input === "s") {
    inputsUser = [];
    askUserNumbers();
  } else if ((input === "n") | (input == null)) {
    console.log("Hasta luego");
  } else if ((input == "") | (Number(input) == isNaN)) {
    alert("Ingrese una opción válida");
    askAgain();
  }
};

const main = () => {
  askUserNumbers();
};
main();
