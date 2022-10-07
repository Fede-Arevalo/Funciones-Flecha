// Funciones Flecha //

// . Convierte la siguiente función en una función flecha:

// function saludar() {
//   return "Hola";
// }

const saludar = () => {
  return "Hola";
};

console.log(saludar());

// ----------------------------------

// . Convierte la siguiente función en una función flecha en línea:

// function division(a,b) {
//   return a / b;
// }

const division = (a, b) => a / b;

console.log(division(10, 2));

// ----------------------------------

// . Convierte la siguiente función en una función flecha:

// function miNombre(nombre) {
//   return `Mi nombre es ${nombre}`;
// }

const miNombre = (nombre) => {
  return `Mi nombre es ${nombre}`;
};

console.log(miNombre("Federico"));

// ----------------------------------

// . Convierte las siguientes funciones en funciones flecha:

// function test2() {
//   console.log("Función test 2 ejecutada.");
// }
// function test1(callback) {
//   callback();
// }

const test2 = () => {
  console.log("Función test 2 ejecutada.");
};

const test1 = (test2) => {
  test2();
};

test1(test2);

// ----------------------------------

// Foreach //

// . Utiliza la siguiente array para resolver los próximos ejercicios:

let gente = [
  {
    nombre: "Jamiro",
    edad: 45,
  },
  {
    nombre: "Juan",
    edad: 35,
  },
  {
    nombre: "Paco",
    edad: 34,
  },
  {
    nombre: "Pepe",
    edad: 14,
  },
  {
    nombre: "Pilar",
    edad: 24,
  },
  {
    nombre: "Laura",
    edad: 24,
  },
  {
    nombre: "Jenny",
    edad: 10,
  },
];

// . Crea un array con la gente mayor de 25 años y muéstralo por consola.

const mayores25 = [];

gente.forEach((persona) => {
  if (persona.edad > 25) {
    mayores25.push(persona);
  }
});

console.log(mayores25);

// . Crea un array con la gente que empieza por J.

const empiezaJ = [];

gente.forEach((persona) => {
  if (persona.nombre.startsWith("J")) {
    empiezaJ.push(persona);
  }
});

console.log(empiezaJ);

// ----------------------------------

// Map //

// . Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.

const mayor25 = gente.map((persona) => {
  if (persona.edad > 25) {
    return persona;
  }
});

console.log(mayor25);

// . Crea un array con la gente que empieza por J.

const nombresConJ = gente.map((persona) => {
  if (persona.nombre.startsWith("J")) {
    return persona;
  }
});

console.log(nombresConJ);

// . Dado el siguiente array, crear otro que sea el
// resultado de elevar cada número a si mismo:

const numbers = [4, 5, 6, 7, 8, 9, 10];

const numXnum = numbers.map((num) => {
  return num ** num;
});

console.log(numXnum);

// ----------------------------------

// Filter //

// . Crea un segundo array que devuelva los impares

const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const impares = arrNumbers.filter((number) => number % 2 == 1);

console.log(impares);

// . Dado el siguiente array, genera un segundo array que
// filtre los platos veganos y saque una sentencia como la del ejemplo:

/* [
    'Que rico Tempeh me voy a comer!',
    'Que rica Tofu burguer me voy a comer!'
   ]
*/

const foodList = [
  {
    name: "Tempeh",
    isVeggie: true,
  },
  {
    name: "Cheesbacon burguer",
    isVeggie: false,
  },
  {
    name: "Tofu burguer",
    isVeggie: true,
  },
  {
    name: "Entrecot",
    isVeggie: false,
  },
];

const platosVeganos = foodList
  .filter((plato) => plato.isVeggie == true)
  .map((platoFiltrado) => `Que rico ${platoFiltrado.name} me voy a comer!`);

console.log(platosVeganos);

// ----------------------------------

// Reduce //

// . Dado el siguiente array, obtén la multiplicación de todos
// los elementos del array:
// Salida--> 483600

const arrNum = [39, 2, 4, 25, 62];

const multi = arrNum.reduce((a, b) => a * b);

console.log(multi);

// --------------- EXTRAS --------------- //

// Map //

// . Dado el siguiente array, crear un segundo array que
// forme frases como en el ejemplo accediendo a las propiedades
// del objeto proporcionado:

const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];

const frases = staff.map((frase) => {
  return `${frase.name} es ${frase.role} y le gusta ${frase.hobbies[0]} y ${frase.hobbies[1]} `;
});

console.log(frases);
