
// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "string";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 0;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

//....................................

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
return(str)
}

//....................................

// Suma "x" de "y" y devuelve el valor
// Tu código:
let suma = (x, y) => x+y
console.log(suma(10,10));

//....................................

// Resta "x" de "y" y devuelve el valor
// Tu código:
let resta = (x, y) => x-y 

//....................................

// Multiplica "x" por "y" y devuelve el valor
// Tu código:
let  multiplica = (x, y) => x*y

//....................................

// Divide "x" entre "y" y devuelve el valor
// Tu código:
let divide = (x, y) => x/y

//....................................

// Devuelve "true" si "x" e "y" son iguales
// De lo contrario, devuelve "false"
// Tu código:utilizar if y else
function sonIguales(x, y) {
  if (x===y){return console.log("true")}
  else{ return console.log("false")}
}


//....................................

// Devuelve "true" si las dos strings tienen la misma longitud
// De lo contrario, devuelve "false"
// Tu código:

let tienenMismaLongitud = (str1, str2) => {str1.length===str2.length ? console.log("true") : console.log("false")}

//....................................

// Devuelve "true" si el argumento de la función "num" es menor que noventa
// De lo contrario, devuelve "false"
// Tu código:
let  menosQueNoventa= (num) =>  Number(num) < 90 ? console.log("true") : console.log("false")

//....................................

// Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
// De lo contrario, devuelve "false"
// Tu código:


let  mayorQueCincuenta= (num) =>  Number(num) > 50 ? console.log("true") : console.log("false")

//....................................

// Obten el resto de la división de "x" entre "y"
// Tu código:

let obtenerResto = (x, y) => x % y

//....................................

// Devuelve "true" si "num" es par
// De lo contrario, devuelve "false"
// Tu código:

let esPar = (num) => Number(num) % 2 == 0 ? console.log("true") : console.log("false") 


//....................................

// Devuelve "true" si "num" es impar
// De lo contrario, devuelve "false"
// Tu código:

let esImpar = (num) => Number(num) % 2 != 0 ? console.log("true") : console.log("false") 

//....................................

// Devuelve el valor de "num" elevado al cuadrado
// ojo: No es raiz cuadrada!
// Tu código:

let elevarAlCuadrado = (num) =>Number(num**2)

//....................................

// Devuelve el valor de "num" elevado al cubo
// Tu código:

let elevarAlCubo = (num) => Number(num**3)

//....................................

// Devuelve el valor de "num" elevado al exponente dado en "exponent"
// Tu código:

let elevar = (num, exponent) => Number(num**exponent)

//The Math.pow() static method returns the value of a base raised to a power.
// Math.pow()= x**y

//....................................

// Redondea "num" al entero más próximo y devuélvelo
// Tu código:

let redondearNumero = (num) => Math.round(num)


//....................................

// Redondea "num" hacia arriba (al próximo entero) y devuélvelo
// Tu código:

let redondearHaciaArriba = (num) => Math.ceil(num)

//....................................

//Generar un número al azar entre 0 y 1 y devolverlo
//Pista: investigá qué hace el método Math.random()

console.log((Math.random()))


//....................................

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false

}

//....................................

// Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
// Ejemplo: "hello world" pasaría a ser "hello world!"
// Tu código:

let agregarSimboloExclamacion = (str) => str + "!"
// se puede utilizar tambien el metodo de String concat()


//....................................

// Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
// Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
// Tu código:

let combinarNombres = (nombre, apellido) => String(nombre+" "+apellido)

//....................................

// Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
// "Martin" -> "Hola Martin!"
// Tu código:

let obtenerSaludo = (nombre) => String("Hola "+nombre+"!")

//....................................

  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:

let obtenerAreaRectangulo = (alto, ancho) => Number(alto*ancho)

//....................................

  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí

let retornarPerimetro = (lado) => Number(lado*4)

//....................................


  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí

let areaDelTriangulo = (base, altura) => Number( (base*altura)/2)

//....................................

  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí

let deEuroAdolar = (euro) => Number(euro * 1.2)

//....................................

  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí

let esVocal = letra => {
  if (letra.length > 1 || letra==""){ console.log("Dato incorrecto")}
  else{
    "aeiou".includes(letra) ? console.log("Es Vocal") : console.log("No es Vocal")
    }
} 

