import readLine from "readline";


let nombres = ["pikachu", "chamander", "bulbasur"]; 
let habilidades =[[80, 75, 90], [65, 55, 95],[89, 70, 65]]; 



function participaLiga(habilidades){
    let suma = 0; 
    let promedioTotal = 0; 
    let promedioIndividual = []; 

    //calculamos los promedios de cada uno de los pokemon, y del total de los poquemon
    for(let i = 0; i < habilidades.length; i++){
        
        for(let j = 0; j < habilidades[0].length; j++){

            suma = suma + habilidades[i][j]; 
            
            //cuando haya terminado una fila...es decir j = 2
            if( j === 2) {
               
                suma = Math.round(suma / 3); //terminamos el calculo de la media 

                promedioIndividual.push(suma); //lo añadimos como promedio individual al array
              
                suma = 0; //reseteamos el contador para el siguiente pokemon (es decir la siguiente fila)
            }
          
        }
    }

    console.log("promedio de cada uno de los pokemon: "+ promedioIndividual); 

      //cuando haya completado la matriz entera; calculamos el promedio total. 
     
        for(var item of promedioIndividual) {

          promedioTotal += item; 
        }
        
        promedioTotal = Math.round(promedioTotal / 3); 
      
    console.log("El promedio total es de "+promedioTotal); 

    console.log("Lista de pókemon que participan en la liga: "); 
    nombres.forEach((nombre, i) => {

        promedioIndividual.forEach((promedio, j) => {

                if(promedio >= promedioTotal && i === j){
                    console.log("nombre pokemon: " + nombre+" promedio habilidades: "+ promedio+ " posición del array: "+j);
                }

        }); 
    }); 

   }

//participaLiga(habilidades); 


function buscarPokemon(nombre){

    var posicion = -1; 

    if(nombres.some(item => item.toLowerCase() === nombre.toLowerCase())){

        nombres.forEach((item, i) => {
            if(item.toLowerCase() === nombre.toLowerCase()) {
                posicion = i; 
            } 
        }); 
    }

    return posicion;  
}


function modificarHabilidad(nombre){

    let nombrePokemon = buscarPokemon(nombre); //almacena la posicion que ocupe el nombre de ese pokemon

    if(nombrePokemon === -1){
        console.log("Error el pokemón no se encuentra almacenado en el array"); 
        return;
    }


    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    }); 

    let pregunta= () =>  {

        rl.question(`¿Que posición del vector habilidades deseas modificar? [${habilidades[nombrePokemon]}]  `, (posicion) => {
            posicion = parseInt(posicion); 

            if(!Number.isInteger(posicion)){
                console.log("Error: No se ha introducido un número"); 
                rl.close(); 
                return; 
            }

            if(posicion < 0 || posicion > 2){
                console.log("Error: la posición introducida no representa ninguna habilidad"); 
                rl.close(); 
                return; 
                
            }

            
           

            rl.question(`¿ que valor deseas darle a esa posición ?`, (valor) => {
                valor = parseInt(valor); 

                if(!Number.isInteger(valor)){
                    console.log("Error: No se ha introducido un número"); 
                    rl.close(); 
                    return; 
                }

                habilidades[nombrePokemon][posicion] = valor; //nombre pokemo representa (fila/i) y posicion es (columna/j) dentro de cada fila
                console.log(habilidades); 
                rl.close(); 

            }); 
        }); 
          
        

    }; 

     pregunta(); 

    
}

modificarHabilidad("pikachu"); 






