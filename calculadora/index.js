"use strict";
let resultado;
let symb = "";
let visor = "0";
//opA is the same number that can see in the visor, and
//opB is previous number(small letter).
let opA = 0;
let opB = 0;

//Functions that gives funcionality. (Callbacks)
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

//High-order funcion, Here will use previous functions.
function calculadora(a, b, operacion) {
  return operacion(a, b);
}

//I did this functions to give other functionalities as show the numbers in the visor, to finish operation,
//to users can use operators (add, substract, multiply, split), etc.
function showVisor(numero) {
  if (visor === "0") visor = `${numero}`;
  else if (visor.length < 9) visor += `${numero}`;
  result.innerText = `${visor}`;
  opA = Number(visor);
}

function addOperation() {
  symb = "sumar";
  endOperation();
  if (opB === 0) {
    opB = calculadora(opA, opB, sumar);
  } else {
    opB = calculadora(opB, opA, sumar);
  }
  prevOperat.innerText = `${opB}+`;
  resultado = opB;
  intNumb();
  result.innerText = `${resultado}`;
}

function substractOperation() {
  symb = "restar";
  endOperation();
  if (opB === 0) {
    opB = calculadora(opA, opB, restar);
  } else {
    opB = calculadora(opB, opA, restar);
  }
  prevOperat.innerText = `${opB}-`;
  resultado = opB;
  intNumb();
  result.innerText = `${resultado}`;
}

function multiplyOperation() {
  symb = "multiplicar";
  endOperation();
  if (opB === 0) {
    opB = calculadora(opA, 1, multiplicar);
  } else {
    opB = calculadora(opA, opB, multiplicar);
  }
  prevOperat.innerText = `${opB}*`;
  resultado = opB;
  intNumb();
  result.innerText = `${resultado}`;
}

function splitOperation() {
  symb = "dividir";
  endOperation();
  if (opB === 0) {
    opB = calculadora(opA, 1, dividir);
  } else {
    opB = calculadora(opB, opA, dividir);
  }
  prevOperat.innerText = `${opB}/`;
  resultado = opB;
  intNumb();
  result.innerText = `${resultado}`;
}

function addDot() {
  !visor.includes(".") ? visor += "." : visor;
  result.innerText = `${visor}`
}

function deleteAllOperation() {
  opA = 0;
  opB = 0;
  visor = `0`;
  result.innerText = `0`;
  prevOperat.innerText = ``;
}

function endOperation() {
  visor = "0";
}

function intNumb() {
  !Number.isInteger(resultado) ? resultado = parseFloat(resultado) : resultado; 
}

function deleteNumber() {
  if(visor.length > 1) {
    visor = visor.slice(0, -1);
    opA = Number(visor);
  } else if (visor.length === 1) {
    visor = `0`;
  }
  result.innerText = `${visor}`;
}

function equalOperation() {
  if (symb === "sumar") resultado = opB + Number(visor);
  if (symb === "restar") resultado = opB - Number(visor);
  if (symb === "multiplicar") resultado = opB * Number(visor);
  if (symb === "dividir") resultado = opB / Number(visor);
  intNumb();
  result.innerText = `${resultado}`;
  prevOperat.innerText = ``;
  opA = 0;
  opB = 0;
  visor = "0";
}

//Here i bring all data from HTML to Js, 
const result = document.querySelector("#result");
const prevOperat = document.querySelector("#prev-operat");
const add = document.querySelector("#add");
const substract = document.querySelector("#substract");
const split = document.querySelector("#split");
const multiply = document.querySelector("#multiply");
const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const equal = document.querySelector("#equal");
const deleted = document.querySelector("#delete");
const deleteAll = document.querySelector("#delete-all");
const dot = document.querySelector("#dot");

//Then use event listeners to press each key of the interface.
zero.addEventListener("click", () => {
  showVisor(0);
});

one.addEventListener("click", () => {
  showVisor(1);
});

two.addEventListener("click", () => {
  showVisor(2);
});

three.addEventListener("click", () => {
  showVisor(3);
});

four.addEventListener("click", () => {
  showVisor(4);
});

five.addEventListener("click", () => {
  showVisor(5);
});

six.addEventListener("click", () => {
  showVisor(6);
});

seven.addEventListener("click", () => {
  showVisor(7);
});

eight.addEventListener("click", () => {
  showVisor(8);
});

nine.addEventListener("click", () => {
  showVisor(9);
});

add.addEventListener("click", () => {
  addOperation();
});

substract.addEventListener("click", () => {
  substractOperation();
});

multiply.addEventListener("click", () => {
  multiplyOperation();
});

split.addEventListener("click", () => {
  splitOperation();
});

deleted.addEventListener("click", () => {
  deleteNumber();
});

deleteAll.addEventListener("click", () => {
  deleteAllOperation();
});

equal.addEventListener("click", () => {
  equalOperation();
});

dot.addEventListener("click", () => {
  addDot();
})

// Me resta terminar algunas funcionalidades ("+/-" , "%").
