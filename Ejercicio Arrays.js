/* Ejercicio  arrays */

/* 1)Declarar un array que vamos a llamar “clasificaciones” con los siguientes valores:
Marcos, Franco, Agostina, Leon, Juan Cruz,Eduardo */

/* (vamos a suponer que esa es la orden de clasificación de un concurso) */

/* 2)recorre el array (clasificaciones) e Imprime la clasificación actual.
 (realizar una funcion "mostrarClasificacion()" esa funcion debe recorrer el array con un bucle for y mostrar la clasificacion) */

//modo Correcto ForEach (pueod usar tambien document.write)

/* 3)El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array: */
/* a)Leon adelanta a Agostina */

/* b)Eduardo es descalificado y se elimina del concurso */

/* c)Detrás de Marcos y antes de Franco se clasifican dos nuevas concursantes: Julieta y Martina, en ese orden */

/* d)Hay una nueva participante que pasa a encabezar la clasificación: Alicia */

/* e)muestra la clasificación actualizada (mostrarClasificacion())y comprueba que se ha hecho correctamente  */


//1

clasificaciones = [ "Marcos", "Franco", "Agostina", "Leon", "Juan Cruz", "Eduardo"];


//2

function mostrarClasificacion(array){
    console.log("orden de clasificacion")
    array.forEach((element) => console.log(element));
}

//mostrarClasificacion(clasificaciones)

//3a
clasificaciones.splice(2, 2, "Leon", "Agostina");
//mostrarClasificacion(clasificaciones)


//3b

clasificaciones.pop();
//mostrarClasificacion(clasificaciones)

//3c
clasificaciones.splice(1, 0, "Julieta", "Martina");
//mostrarClasificacion(clasificaciones)


//3d
clasificaciones.unshift("Alicia");
//mostrarClasificacion(clasificaciones)


//3e
mostrarClasificacion(clasificaciones)
