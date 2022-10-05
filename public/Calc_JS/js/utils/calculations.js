export function sum() {
  let acc = arguments[0];
  for (let i = 1; i < arguments.length; i += 1) {
    acc += arguments[i];
  }
  return acc;
}
export function substract() {
  let acc = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    acc -= arguments[i];
  }
  return acc;
}
export function multiply() {
  let acc = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    acc *= arguments[i];
  }
  return acc;
}
export function divide() {
  let acc = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    acc /= arguments[i];
  }
  return acc;
}
