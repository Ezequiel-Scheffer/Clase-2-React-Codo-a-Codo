// "x" e "y" son números enteros .
// Devuelve el número más grande
// Si son iguales, devuelve cualquiera de los dos
// Tu código:
/* Metodos de MAth */

let obtenerMayor = (x, y) => x>=y ? x : y
//console.log(obtenerMayor(2,3))

//==========================================================

//Determinar si la persona según su edad puede ingresar a un evento.
//Si tiene 18 años ó más, devolver --> "Allowed"
//Si es menor, devolver --> "Not allowed"

let mayoriaDeEdad = (edad) => edad >= 18 ? console.log("Allowed") :console.log(" Not Allowed")

//==========================================================

//Recibimos un estado de conexión de un usuario representado por un valor numérico. 
//Cuando el estado es igual a 1, el usuario está "Online"
//Cuando el estado es igual a 2, el usuario está "Away"
//De lo contrario, presumimos que el usuario está "Offline"
//Devolver el estado de conexión de usuario en cada uno de los casos.

let conection = (status) => {
  status == 1 ? console.log("Online") :
  status == 2 ? console.log("Away") :
  console.log("Offline")
}

//==========================================================

// Devuelve un saludo en tres diferentes lenguajes:
// Si "idioma" es "aleman", devuelve "Guten Tag!"
// Si "idioma" es "mandarin", devuelve "Ni Hao!"
// Si "idioma" es "ingles", devuelve "Hello!"
// Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
// Tu código:

let saludo = (idioma) => {
  idioma == "aleman" ? console.log("Guten Tag!") :
  idioma == "mandarin" ? console.log("Ni Hao!") :
  idioma == "ingles" ? console.log("Hello!") :
  console.log("Hola!")
}

//==========================================================

  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuelve --> "This is blue"
  //En caso que el color recibido sea "red", devuelve --> "This is red"
  //En caso que el color recibido sea "green", devuelve --> "This is green"
  //En caso que el color recibido sea "orange", devuelve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.

let colors = (color) => {
  
  switch(color) {
    case "blue":
      console.log("This is blue")
      break;
    case "red":
      console.log("This is red")
      break;
    case "green":
      console.log("This is green")
      break;  
    case "orange":
      console.log("This is orange")
      break;
    default:
      console.log("Color not found")
  }
}

//==========================================================

  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:

let esDiezOCinco = (numero) => (5 == numero || numero== 10) ? console.log("true") : console.log("false")

//==========================================================

  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:

let estaEnRango = (numero) => (50 > numero && numero> 20) ? console.log("true") : console.log("false")


//==========================================================

// Devuelve "true" si "numero" es un entero (int/integer)
// Ejemplo: 0.8 -> false
// Ejemplo: 1 -> true
// Ejemplo: -10 -> true
// De lo contrario, devuelve "false"
// Pista: Puedes resolver esto usando `Math.floor`
// Tu código:
//
//let esEntero = (numero) => numero==Math.floor(numero) ? console.log("true") : console.log("false")

let esEntero = (numero) => numero==Math.floor(numero) ? true : false 

//==========================================================

// Si "numero" es divisible entre 3, devuelve "fizz"
// Si "numero" es divisible entre 5, devuelve "buzz"
// Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
// De lo contrario, devuelve el numero

let fizzBuzz = (numero) => {

  (numero % 3 == 0 && numero % 5 == 0) ? console.log("fizzbuzz"):
  numero % 3 == 0 ? console.log("fizz"):
  numero % 5 == 0 ? console.log("buzz"):
  console.log(numero)
} 

//==========================================================

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 

}

//==========================================================

// Devuelve "true" si "numero" es primo
// De lo contrario devuelve "falso"
// Pista: un número primo solo es divisible por sí mismo y por 1
// Pista 2: Puedes resolverlo usando un bucle `for`
// Nota: Los números 0 y 1 NO son considerados números primos

function esPrimo(numero) {

  let isPrime=true;
// check if number is equal to 1
if (numero < 2) {
    console.log("falso");
}

// check if number is greater than 1
else if (numero >= 2) {

    // looping through 2 to number-1
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${numero} is a prime number`);
    } else {
        console.log(`${numero} is a not prime number`);
    }
}

}

//==========================================================

//Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
//si su valor es true y “Soy falso” si su valor es false.
//Escribe tu código aquí

let esVerdadero = (valor) => valor ? console.log("Soy verdadero") : console.log("Soy falso") 


//==========================================================

//Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
//La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
//Escribe tu código aquí

let tablaDelSeis = () => {
  arr=[];
  for (let i=0 ; i < 11 ; i++)
    {
      arr[i] = 6 * i;
    }
  return arr;  
}

//console.log(tablaDelSeis())
//==========================================================

//Leer un número entero y determinar si tiene 3 dígitos.
//Escribe tu código aquí

let tieneTresDigitos = (numero) => numero.toString().replace('.', '').length


//==========================================================

//Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
//Retornar el valor final.
//Usar el bucle do ... while.

let doWhile = (numero) => {
  let i=0;
  do  {
        numero+=5;
        i++;} 
  while (i<8);
  console.log(numero)
}


