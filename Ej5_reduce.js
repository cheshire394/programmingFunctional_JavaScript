//REDUCE() : El método reduce() en JavaScript se utiliza para reducir todos los elementos de un array a un solo valor.


//0: Especifica que el acumulador comienza desde 0, ES EL UNICO ELEMENTO OPCIONAL EN LA SINTAXIS DE REDUCE.
//acumulador: El valor acumulado después de cada iteración. como un contador
//elemento: El elemento actual del array en la iteración.

//IMPORTANTE --> ¿DEBE DE SEGUIR ESTE ORDEN ESPECIFICO?
// RESPUESTA --> Sí, la sintaxis del método reduce debe seguir un orden específico: 

//USOS DE RECUDE: 
//contador de elementos con una condición en un array de objetos o datos simples
// Obtener un elemento de un array como por ejemplo el maximo o el minimo
// realizar operaciones aritmeticas con un único resultado con números de un array.



//REDUCE PARA EJECUTAR OPERACIONES EN UNA ARRAY.
const arr = [1, 2, 3];
const suma = arr.reduce((acumulador, elemento) => acumulador + elemento, 0);
//console.log(suma); // Output: 6

const abecedario = ['a', 'b', 'c', 'd']; 
let abcd = abecedario.reduce((total , item) => total + item); 
//console.log(abcd); 




//REDUCE COMO CONTADOR DE ELEMENTOS

//3.- Muestra en pantalla la cantidad de super Heroes de DC que existen en la tabla
const superHeroes = [ 
    {nombre:'Batman', tipo:'DC'},
    {nombre:'Linterna Verde', tipo:'DC'},
    {nombre:'Lobezno', tipo:'Marvel'},
    {nombre:'Spiderman', tipo:'Marvel'},
    ];

    //en este ejemplo estamos contando en un array con reduce, si es de tipo DC SE SUMA UNO, SINO NO HACE NADA, Y EMPEZAMOS CON EL CONTADOR A 0
//console.log(superHeroes.reduce((acumulador, item)=> item.tipo === 'DC' ? acumulador + 1:  acumulador, 0)); //esta usando un ternario

//veamos otro ejemplo
let animales = [

    {nombre : "zara", especie : "perro"}, 
    {nombre : "Dana", especie : "perro"}, 
    {nombre : "Nayade", especie : "gato"}, 
    {nombre : "Lua", especie : "gato"}, 

];

//analiza con reduce cuantos gatos hay?

//si lo que esta por delante del interrogante se cumple coge la zona true del ternario, sino la zona false del ternario
const cantidadGatos = animales.reduce((acumulador, item) => item.especie === "gato" ? acumulador + 1 : acumulador, 0); 
//console.log("Cuantos gatos hay que animales: "+cantidadGatos); 



/**También se realizó en el examen de la primera evaluación un ejercicio cuya solución conlleva la utilización del método reduce:
Tenemos una lista de listas similar a esta:
Sube el código JavaScript para obtener el menor número y el mayor de esta lista u otra similar.  */

//Este codigo funcionarioa si lista fuera un VECTOR, PERO ES UNA MATRIZ Y POR LO TANTO NO FUNCIONA
const lista2 = [3,4,5,23,4,5,6,7];
let maximo = Math.max(...lista2);
//console.log(maximo); 


//REDUCE PARA OBTERNER UN ELMENTO CONCRETO --> EN ESTE CASO EL MAXIMO Y EL MINIMO: 

//SOLUCIÓN 1: APLANAR LA LISTA, ES DECIR CONVERTIRLA EN UN VECTOR CON FLAT()
const lista = [[3,4,5],23,[4,5,6,7]];
let aplanada = lista.flat(); 

let max= Math.max(...aplanada);
let min = Math.min(...aplanada); 
console.log("Numero minimo de la lisa: "+min);
console.log("Numero minimo de la lisa: "+max);

//también se puede convertir en un vector de esta manera (de hecho cayó en un exámen)
//5.- reduce se utiliza para pasar de una lista de listas a una lista de elementos simples. El ejemplo más típico:
//Este modelo de solución es la utilzada en la resolución del examen de la primera evaluación del curso 22-23. 

let lista3 = [[1,2],3,[4,5,6]]
let vector = lista3.reduce((a,b)=> a.concat(b),[]) //Que devuelve: [ 1, 2, 3, 4, 5, 6 ]
console.log(vector); 


//AL FINAL ES LO MISMO QUE FLAT... Y A MI ME GUSTA MAS FLAT.


//SOLUCCION 2 : USANDO REDUCE...COMO PIDE EL EJERCICIO!! pero en AMBAS SOLUCIONES ES NECESARIO APLANAR LA MATRIZ

//mi solucion: Acumulador comienza en 0, si es mayor que el elemento, el acumulador será el elemento, sino será lo que era....
const max2 = aplanada.reduce((acumulador, item) => acumulador < item ? acumulador = item : acumulador, 0);
//console.log("Numero maximo de la lisa: "+max2); 

//Para que acumulador sea el maximo rescataremos la variable del anterior reduce --> max = 23
const min2 = aplanada.reduce((acumulador, item) => acumulador > item  ? acumulador = item : acumulador, max); 
//console.log("Numero minimo de la lisa: "+min2); 



//MAS EJERCICIOS

//OPERACIONES PERO ESTA VEZ CON OBJETOS

let listaSuspensos = [ 
    {clase: "SMR1", suspensos: 2}, 
    {clase: "DAW2", suspensos: 3},
    {clase: "SMR2", suspensos: 4}
]; 

console.log(listaSuspensos.reduce((acumulador,item) => acumulador+=item.suspensos,0));


//  EJERCICIOS MAS COMPLEJOS USANDO REDUCE......

//3.- Se puede utilizar para realizar un acumulado por elementos que se repitan en una lista:
let lista4 = ["a","b","c","d","a","b","c"]; 
let contLetras = lista4.reduce((listafinal,letra)=> { 
   // console.log(letra); //para que visualmente vea que es letra.
   // console.log(listafinal); 
   // console.log("listaFinal[letra]" + listafinal[letra]); 
    listafinal[letra] = (listafinal[letra]||0) +1; // Si la letra ya existe en listafinal, incrementar su contador; de lo contrario, inicializar en 0 y luego incrementar

    return listafinal},{} //el acumulador en una lista vacia inicialmente
); 

//console.log(contLetras); 


//4.- Podemos resolver problemas que mezclen 2 y 3:
//Dada la lista de suspensos en cada grupo e indicando en cada grupo el grado al que pertenece: 
//hallemos el número de suspensos por grado

let suspensos = [{grado:"SUPERIOR", grupo:"2DAW",suspenso:3},
                 {grado:"SUPERIOR", grupo:"1DAW", suspenso:4},
                 {grado:"MEDIO", grupo:"2SMR", suspenso:4}]; 

suspensos.reduce((lista, elemento) => { lista[elemento.grupo]=(lista[elemento.grupo] || 0) + elemento.suspenso; return lista},[])  //En este caso devolverá una lista
suspensos.reduce((lista, elemento) => { lista[elemento.grupo]=(lista[elemento.grupo] || 0) + elemento.suspenso; return lista},{}) //En este caso devolverá un objeto de objetos












