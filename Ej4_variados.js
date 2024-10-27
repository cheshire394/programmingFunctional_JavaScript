/**Ejercicios MAP, FILTER, REDUCE**/


const superHeroes = [ 
	{nombre:'Batman', tipo:'DC'},
	{nombre:'Linterna Verde', tipo:'DC'},
	{nombre:'Lobezno', tipo:'Marvel'},
	{nombre:'Spiderman', tipo:'Marvel'},
	];

//1.- Realiza una función que se le pasen como parámetros la lista y el tipo. Debe devolver una lista únicamente con los elementos del tipo indicado

function filtrar(lista, tipo){

    if(Array.isArray(lista) && (tipo === "DC" || tipo === "Marvel")){

        const resultadoSuperTipo = lista.filter(superTipo => superTipo.tipo === tipo); 
      
        console.log(resultadoSuperTipo); 

    }else console.error("Los parametros introducidos no son los esperados"); 
}
//filtrar(superHeroes, "DC"); 

//2.- Tenemos que cambiar el nombre de todos los super héroes de DC a ‘CAMBIADO’ un espacio en blanco y el nombre del super Héroe

// Filtramos los superhéroes de DC y cambiamos sus nombres
const updatedSuperHeroes = superHeroes.map(supers => {
    if (supers.tipo === 'DC') {
        //utilizamos spread Operator para crear una copia superficial
        //y ahora cambiamos las propiedades que no nos interesan
      return { ...supers, nombre: `CAMBIADO ${supers.nombre}` };
    }
    return supers;
  });

//3.- Muestra en pantalla la cantidad de super Heroes de DC que existen en la tabla

let filtracion = superHeroes.filter(superHero => superHero.tipo === "DC"); 
//console.log(filtracion); 
let longitud = filtracion.length; 
//console.log("La cantidad de superHeroes con DC ES DE : "+longitud); 

//4.- Ahora la tabla es esta:
	const superHeroes2 = [ 
	'{"nombre":"Batman", "tipo":"DC"}',
	'{"nombre":"Linterna Verde", "tipo":"DC"}',
	'{"nombre":"Lobezno", "tipo":"Marvel"}',
	'{"nombre":"Spiderman", "tipo":"Marvel"}',
	];
  //console.log(superHeroes2); 

/*Observa que es una lista de cadenas con formato JSON, pero no es JSON.
a) crea una nueva lista con elementos objetos JavaScript (Investiga, investiga...)

//Crear un array de objetos a partir de un array de strings, es de las funciones de map en JS:

//investigacion: 
/**Para transformar una lista de cadenas JSON en una lista de objetos JavaScript, necesitas utilizar el método JSON.parse() y map */

let objJSON = superHeroes2.map(conversorObj => JSON.parse(conversorObj)); 
//console.log(objJSON); 


//b) filtra únicamente los elementos de Marvel*/
let marvel = objJSON.filter(supers => supers.tipo === "Marvel"); 
//console.log(marvel);

//5.- Añade, en superHeroes, dos nuevos super Héroes al final de la lista
//6.- Añade otros dos superHeroes al inicio de la lista

let añadir = [
  {nombre : "Mr.Increible", tipo: "Pixar"},
  {nombre : "Elastigel", tipo: "Pixar"},
]; 

añadir.forEach((item)=> {
  objJSON.unshift(item); 
}); 

//console.log(objJSON); 





//7.- Ordena, alfabéticamente, los superHeroes por nombre (investiga)

objJSON.sort((a, b)=> {

  if(a.nombre > b.nombre) return 1; 
  else if (a.nombre < b.nombre) return -1; 
  else return 0; //si son iguales no hagas nada
});
//console.log(objJSON); 


//8.- Ordena, alfabéticamente, los superHeroes por tipo (Bueno, ya lo habías investigado antes…)

objJSON.sort((a, b) => {
  if(a.tipo > b.tipo) return 1; 
  else if (a.tipo > b.tipo) return -1; 
  else return 0; 
}); 

//console.log(objJSON); 

//9.-  Crea una lista únicamente con los nombres de los superHéroes como cadenas de caracteres.
let nombres = []; 

objJSON.forEach((item) => {

    let nombre = item.nombre; 
    nombres.push(nombre); 
}); 
//console.log(nombres); 

//10.- Lo mismo que en 9 pero esta vez debe ser una lista de objetos del tipo { nombre: ‘Batman’ }

const objetosNombre = nombres.map(nombre => ({ nombre: nombre }));
//console.log(objetosNombre); 