//Crea un cuadro de diálogo (alert) que muestre lo siguiente “JavaScript funcionando correctamente”


//alert("JavaScript funcionando correctamente");

//Crear variable tipo let de nombre variableSinValor declarada sin valor

let variableSinValor = "";

//Crear 2 variables tipo let de nombres booleano1 y booleano2 con valores booleanos

let booleano1 = true;
let booleano2 = false;

//Crear variable tipo const de nombre PI declarada con valor 3.14 (He modificado esta cantidad para hacer el último ejercicio de este bloque)

const PI = 3.14159;

//Crear variable tipo const de nombre TAU declarada con valor 2 veces PI

const TAU = PI*2;

console.log(TAU);

//Crear variable tipo const de nombre miNombre declarada con valor tu nombre

const miNombre = "German";

//Crear variable tipo const de nombre miNumeroFav declarada con valor numérico

const miNumeroFav = 5;

//Crear variable tipo const de nombre miNumeroFav declarada con valor numérico

let moroso = true;

//Muestra por consola la longitud de la variable miNombre

console.log(miNombre.length);

//Muestra por consola el tipo de dato de la variable miNumeroFav

console.log(typeof miNumeroFav);

//Muestra un console.log que diga ‘Mi nombre es Euralio y mi numero favorito es 7” concatenado variables declaradas más arriba

console.log("Mi nombre " + " es " + miNombre + " y mi numero favorito es " + miNumeroFav);

//Muestra por consola “Seré un crack en JavaScript al terminar el bootcamp” en mayúsculas.

let frase= "Seré un crack en JavaScript al terminar el bootacamp";
console.log(frase.toUpperCase());

// o bien

console.log("Seré un crack en JavaScript al terminar el bootacamp".toUpperCase());

//Muestra por consola solo los primeros 5 caracteres de la siguiente variable = ‘Hola soy un crack”

console.log('Hola soy un crack'.substring(0,5));

//Convierte la variable miNumeroFav en una string y luego muestra por consola el tipo de dato que es dicha variable

const miNumeroFavString = "5"

console.log(typeof miNumeroFavString);

//Crea una variable, concaténala utilizando template literal, guarda el template literal en otra variable y sacala por consola.

const pet = 'gato';

console.log(`Mi animal favorito es el ${pet}`);

const templateLiteral = `Mi animal favorito es el ${pet}`

console.log(templateLiteral);

//Muestra por consola la variable PI hasta los 2 primeros decimales

console.log("PI:", PI.toFixed(2));

//ARRAYS

//Crear variable de nombre arrayVacio cuyo valor sea un array vacío

const arrayVacio = ['']


//Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)

const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Crear variable de nombre arrayNumeros2 declarada con un array de números del 0 al 15 (0, 1, 2...)

const arrayNumeros2 = [0, 1, 2, 3, 4 ,5 ,6 ,7 ,8 ,9, 11, 12, 13, 14, 15];

//Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)

const arrayNumerosPares = [0, 2, 4, 6, 8];

//Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)

const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

//Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'
 
const holaMundo = ['Hola', 'Mundo'];

//Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'

const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

//Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

const arrayDeArrays = [[756, 'nombre'], [ 225, 'apellido'], [298, 'direccion']];

//Muestra por consola la longitud del array “loGuardoTodo”

console.log(loGuardoTodo.length);

//Crea un nuevo elemento y añadelo al final del array “loGuardoTodo” y muestralo por consola

loGuardoTodo[5] = 'wargame';

console.log("añadido wargame", loGuardoTodo);

//Ordena de mayor a menor la variable arrayNumeros y muestrala por consola

console.log(arrayNumeros.reverse());

//o bien

arrayNumeros.sort(function(a, b){return a-b}); //También se puede cambiar el return a {return b-a}

console.log(arrayNumeros.reverse());

//Ordena de menor a mayor la variable arrayNumeros2 y muestrala por consola

arrayNumeros2.sort(function(a, b){return a-b});

console.log(arrayNumeros2);

//Muestra por consola la propiedad ‘que’ de la variable loGuardoTodo

console.log(typeof loGuardoTodo[1]);

//Añade la propiedad ‘Euralio’ en la array loGuardoTodo y muestrala por consola


loGuardoTodo.unshift('Euralio');

console.log(loGuardoTodo);

//OBJETOS

//Crea un objeto de nombre Coche que tenga las propiedades: marca, modelo y matrícula con sus respectivos valores

const Coche = {
    marca: 'Mazda',
    modelo: 'Mx5',
    matricula: 455,
};

//Crea un objeto de nombre Casa que tenga las propiedades: codPostal, calle, portal y piso con sus respectivos valores

const Casa = {
    codPostal: 46018,
    calle: 'Plaza Arturo Piera',
    portal: 1,
    piso:5,
}

//Crea un objeto de nombre FullStackDeveloper que tenga las propiedades: array lenguajes(ej. ‘javascript’,’php’), array proyectos(ej. ‘mi página personal’,etc)

const FullStackDeveloper = {
    lenguajes:['python', 'javascript', 'php', 'c'],
    proyectos:['mi pagina personal', 'carta', 'tablas', 'formularios']
};

//Crea un objeto de nombre Perro que tenga las propiedades: nombre, raza, color y edad con sus respectivos valores

const Perro = {
    nombre: 'quasimodo',
    raza: 'coquer',
    color: 'verde',
    edad: 1,
}

//Crea un objeto de nombre Noticia que tenga las propiedades: titular y cuerpo con sus respectivos valores

const Noticia = {
    titular: 'uh la la',
    cuerpo: "c'est la vie!",
}

//Crea un objeto de nombre Persona que tenga las propiedades: nombre, apellidos y edad con sus respectivos valores

const Persona = {
    nombre: 'Armando',
    apellidos:'Guerra Segura',
}

//Muestra por consola el nombre de la variable Persona

console.log(Persona);

//Muestra por consola el lenguaje javascript de la variable FullStackDeveloper

console.log(FullStackDeveloper.lenguajes[1]);

//Crea un objeto de nombre Portatil que tenga la propiedad marca, accede a esta propiedad con .marca y muestrala por consola

const Portatil ={
    marca: 'msi',
};

console.log(Portatil.marca);

//Obtén el valor de la propiedad marca del objeto anteriormente creado (Portatil) con ["marca"] y muestrala por consola

console.log(Portatil['marca']);

//Crea un objeto de nombre Concierto con una propiedad llamada grupos que es un array, obtén el valor de la propiedad y muestrala por consola

const Concierto ={
    grupos:['Depeche Mode', 'Chemical Brothers', 'Ultravox', 'Muse', 'Nirvana'],
};

console.log(Concierto.grupos);

//Crea un objeto de nombre Led, con las propiedades: rojo, verde y azul, obtén el valor de las propiedades guardándolo en la variable array RGB[Rojo, Verde, Azul] y muestra este array por consola

const Led = {
    rojo: 245,
    verde:145,
    azul: 28,    
};

const RGB = [Led.rojo, Led.verde, Led.azul];
console.log(RGB);

//Crea un objeto de nombre O_Error con la propiedad código, obtén el valor de la propiedad y muestrala por consola

const O_Error ={
    codigo:2825
};

console.log(O_Error.codigo);

//Crea un objeto de nombre Grupo con la propiedad integrantes (array),obtén el valor de la propiedad guardándolo en la variable 

const Grupo ={
    integrantes:['John Deacon', 'Freddy Mercury', 'Roger Taylor', 'Brian May'],
};

const nombres = Grupo.integrantes;

console.log(nombres[1]);

//Crea un objeto de nombre Impresora con la propiedad objeto tinta{rojo, verde, azul}, obtén el valor de la propiedad guardándolo en la variable nivelesTinta y muestrala por consola (CUIDADO CON LAS PROPIEDADES DE LOS OBJETOS PORQUE SON 2 PUNTOS [:] Y NO UN IGUAL [=])

const Impresora = {
    tinta: {
        rojo:255,
        verde:155,
        azul:50,
    }      
};

const nivelesTinta = [Impresora.tinta.rojo, Impresora.tinta.verde , Impresora.tinta.azul];

console.log(nivelesTinta)

//Crea un objeto de nombre Movil con la propiedad especificaciones obtén el valor de la propiedad con ["especificaciones"] guardándolo en la variable especificaciones y muestrala por consola
 
const Movil ={
    especificaciones:'8 nucleos',
}

const especificaciones = Movil['especificaciones'];

console.log(especificaciones);

//Dado el objeto de nombre Portatil con la propiedad marca, modifica el valor de la propiedad marca por el valor “MSI”, consolea el resultado



Portatil.marca = 'msi'

console.log(Portatil);

//Dado el objeto de nombre Concierto añade el valor Guns N' Roses a la propiedad grupos, consolea el resultado

Concierto.grupos.push = "Guns N'Roses";

console.log(Concierto);

//Dado el objeto de nombre Concierto, crea la propiedad fecha, dale un valor y después modifica el valor de la propiedad por el valor new Date() (fecha de hoy), consolea el resultado

Concierto["fecha"] = '4 de Abril';

Concierto.fecha = new Date();

console.log(Concierto);

//Dado el objeto de nombre Grupo modifica el valor de la propiedad integrantes quitándole un integrante, consolea el número de integrantes actual (ojo! el número, no los nombres de los integrantes)


Grupo.integrantes.pop();

console.log(Grupo.integrantes.length);










        

 
























