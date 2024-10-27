
import readLine from "readline"; 
//Teoria: 

var nombre = "Alicia"; 
var apellido = "Del Saz"; 

let longitud = nombre.length; 
console.log("longitud: "+longitud); 

//slice.... es como sbstr de sql, la diferencia de slice con sbstr es que slice no solo es válido para string, pero sbstr si.
let diminutivo = nombre.slice(0, 3); 
let diminutivo2 = nombre.substring(0, 3); 

console.log("diminutivo con slice: "+ diminutivo); 
console.log("diminutivo con substring: "+ diminutivo2); 




//split (crear un array utilizando un separador dentro de una cadena de caracteres)
let frutas = "Mazana, pera, mandarina"; 
let lista = frutas.split(",");
console.log(frutas); 
console.log(lista);  

//Mayusculas y minusculas: 
let nombreMayus = nombre.toUpperCase(); 
console.log("Nombre mayuscula: "+nombreMayus); 

let nombreMayus2 = nombre.toLocaleUpperCase(); 
console.log("Nombre mayuscula con to localeUpperCase: "+nombreMayus2); 

//no existe un metodo directo que convierta a formato titulo como initcap de sql o ucword de php.


let nombreCompleto = nombre.concat(" "+apellido); 
console.log("nombre completo: "+nombreCompleto); 

//indexOf devuelve la posición en la que se encuentra una letra o cadena de caracteres (es caseSensitive), si no lo encuentra devuelve -1 
// lastIndexOf tiene la misma función pero en el caso de aparecer más de una ocasión, devuelve la posición de la última coincidencia, mientras que indexOf por defecto devuelve la primera ocasión.
let posicion = nombreCompleto.indexOf("D"); 
console.log("La posicion de 'D' en el apellido es: "+posicion+ " indexOf()"); 

let caracter = nombreCompleto.charAt(posicion); 
console.log("El caracter que ocupa la letra 7 es "+caracter+ " charAt()"); 


let numero = 1; 
 let str = numero.toString(); 
console.log("to string convierte un numero a string: "+ str); 

let str2 = numero.valueOf(); 
console.log("value of convierte un numero a string: "+ str2); 



//devuelve el valor ASCII de un caracter
//let valorASCII = cadena.charCodeAt("a");



//includes es un booleano caseSesitive, y es el equivalente a contains
let incluye = nombre.includes("I"); 
console.log("Alicia incluye s "+incluye); //retorna false


// verificador de letras, numeros y caracteres epeciales: 

//isNan (isNaN (que significa "is Not-a-Number")

let num = 1; 
let resultado1 = isNaN(num);  //FALSE
console.log("Es "+num+ " una letra "+ resultado1); 

//isNaN no detecta las letras que representa valores numericos,porque los convierte a numero
let letraNum = "1"; 
let resultado2 = isNaN(letraNum); //FALSE
console.log("Es "+letraNum+ " una letra "+ resultado2); 


//isNaN devuelve true solo con las letras puramente estrictas y con los caractes especiales, salvo los space...
let letra = 'A'; 
let letra2 = '.'; 
let resultado3 = isNaN(letra); //TRUE
console.log("Es "+letra+ " una letra "+ resultado3); 

//los espacios los convierte a 0, por lo tanto retorna false...
let space = " "; 
let resultado4 = isNaN(space); //FALSE
console.log("Los espacio son false en isNaN "+ resultado4); 


// isInfinito (mismo comportamiento que isNaN pero a la inversa).
console.log("ES NUMERO...."); 
console.log("numero 1 es finito "+isFinite(num)); 
console.log("numero 1 (en formato String ) es finito "+isFinite(letraNum)); 
console.log("Es un espacio considerado un numero 0 como hace isNaN "+ isFinite(space)); 
console.log("Es un letra considerada un numero por isFinite(): "+ isFinite(letra)); 









//EJERCICIOS DE PRÁCTICA DE STRINGS

function revertirString(cadena){

    let vacioRevierte=""; 

        for(var i = cadena.length; i >= 0; i--){
            
            let letra = cadena.charAt(i);  //imprimido de fin al principio
            vacio += letra; 
            
 
        }

        console.log("La cadena "+cadena+ " revertida -->> "+vacioRevierte); 

}
//revertirString("Alicia"); 

function vaciarEspacios(cadena){

 //replace() por defecto solo remplaza la primera coincidencia, si deseas que se ejecute todas replaceAll() no esta en todas las versiones js, debes usar / /g,
    let sinSpace = cadena.replace(/ /g, ""); 
    console.log("Cadena sin espacios: "+sinSpace); 
}
//vaciarEspacios(nombreCompleto); 



function contadorVocales(cadena){

    cadena = cadena.toLocaleLowerCase(); 

    let vocales=0; 
    let consonantes = cadena.length; 

    for(var i = 0; i < cadena.length; i++){

        if(cadena.charAt(i) == "a" || cadena.charAt(i) == "e" ||cadena.charAt(i) == "i" ||cadena.charAt(i) == "o" ||cadena.charAt(i) == "u" ){
            vocales++;
            consonantes--; 
        }

    }
    console.log(cadena +" contiene "+ vocales+" vocales y "+consonantes+" consonantes"); 
}
//contadorVocales(nombre); 


/*Divide la cadena de texto “Hola Mundo” en dos partes “Hola ” y “Mundo”, usa
substring de la clase String. Después, concaténalas y muestra de nuevo la palabra.*/

function divide(){

    let cadena = "Hola mundo maravilloso"; 
    
    let partes = cadena.split(" "); //forma un array con las partes de la cadena.
    console.log("dividir cadena usando split "+partes);

    
}
//divide(); 

function valorASCII(cadena){

    for (let i = 0; i < cadena.length; i++) {
        let valorASCII = cadena.charCodeAt(i);

        console.log("El valor ascii de "+ cadena.charAt(i)+ " es "+valorASCII); 

    }

}

//valorASCII("Alicia"); 


// EJERCICIOS MAS COMPLEJOS: 

/*17.Realiza un programa que lea una cadena y diga cuántos caracteres no numéricos hay.*/

function contadorLetrasMatches(){

    let alphaNum = "123 Alicia, 123"; 
    let numeros = 0;
    let letras = 0; 
    let especial = 0; 

    for( var i = 0; i < alphaNum.length; i++){

        let caracter = alphaNum.charAt(i); 

        if(caracter.match("[A-Za-z]")) letras++; 
        else if (caracter.match("[0-9]")) numeros++; 
        else especial++; 

    }

    console.log("EL numero de letras es "+letras+ " el numero de numeros es "+numeros+ " el numero de caracteres especiales es: "+especial); 

}
//contadorLetrasMatches(); 

function contadorLetrasNan(){

    //este metodo es menos preciso que el anterior porque los espacios son cosiderados numero 0, y los caracteres especiales letras
    let alphaNum = "123Alicia"; 
    let numeros = 0;
    let letras = 0; 

    for( var i = 0; i < alphaNum.length; i++){

        let caracter = alphaNum.charAt(i); 

       if(isNaN(caracter)) letras++; 
       else numeros++; 

    }
     console.log("EL numero de letras es "+letras+ " el numero de numeros es "+numeros); 


}
contadorLetrasNan(); 

/*18. Realiza un programa que lea una cadena. El programa nos dirá si la cadena contiene todos los caracteres numéricos o no.*/

function todosNum(cadena){

    let allNumber = true; 

    for(var i = 0; i < cadena.length; i++){
        
        let letra = cadena.charAt(i); 

        //equivale a Character.isDigit() de Java
        if(!isFinite(letra)){
            allNumber=false; 
            break; //deja de comprobar
        }
    }

    return allNumber; 

}

//console.log("Son todos numero en esta cadena: "+ todosNum("123")); 
//console.log("Son todos numero en esta cadena: "+ todosNum(123)); 
//console.log("Son todos numero en esta cadena: "+ todosNum("123Alicia")); 


/*20. Realiza un programa que lea una frase y nos diga si es un palíndromo o
		no. Un palíndromo es una palabra o frase que se lee igual hacia adelante
		que hacia atrás.*/

function palindromo(){

    let frase = "amo la paloma"; 
    frase = frase.replace(/ /g, ""); //recuerda que js no disponemos de replaceAll()

    let vacioRevierte = " "; 
    let isPalindromo = false; 

    for( var i = frase.length; i >= 0; i--){

        let letra = frase.charAt(i); 
        vacioRevierte += letra; 
    }



   vacioRevierte=  vacioRevierte.replace(/ /g, ""); 

   console.log(frase); 
   console.log(vacioRevierte); 

    if(frase === vacioRevierte) isPalindromo = true; 

    
    return isPalindromo; 
}

//console.log("Es asa un palindromo? "+ palindromo()); 


function cadenaLarga(){

    let longitudMaxima = ""; 

    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    }); 

    let pregunta = (i) => {

        rl.question(`Escribre una cadena para la posicion ${i}`, (cadena) => {

                let almacen = []; 
                almacen.push(cadena); 


                for(var j = 0; j < almacen.length; j++){

                    if(cadena.length > almacen[j].length) longitudMaxima = cadena; 

                }

                if(i === 3) {
                    rl.close(); 
                    return logitudMaxima; 
                }else (pregunta + 1); 


        }); 

        
    }; 

    pregunta(1); 

}


console.log("La cadena más larga introducida es: "+cadenaLarga()); 



