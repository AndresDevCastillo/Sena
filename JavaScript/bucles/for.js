/* La suma de los numeros del 1 al 100 */

let valor = 0;
for (let index = 1; index <=100 ; index++){
    if (index%2 == 0){
        valor = valor + index;
    }
}
console.log(valor);



/* Numeros pares del 1 al 20 */
for (let index = 1; index <=20; index++) {
    if (index%2 == 0){
        console.log(index);
    }
    
}

/* imprimir los numeros hasta el 50 (Blanco: numero%3, Negro: numero%5) */
for (let index = 1; index <= 50; index++) {
    if(index%3 == 0){
    if(index%5 == 0){
        console.log("Ying Yang");
    }
    else {
        console.log("blanco");
    }
    }
    else if(index%5 == 0){
        console.log("negro");
    }
    else {
        console.log(index);
    }
}






/* Array en orden inverso */
const array = ['a','b','c','d','e','f','g','h','i',];

console.log(array.reverse());

/* Numeros impares hasta el 20 */
for (let index = 1; index <= 20; index++){
    if (index%2 != 0){
        console.log(index);
    }
}



/* Numeros al reves */
let array2 = []; // Inicializo el array

for(let index = 5; index >0; index--){ //El bucle se ejecuta 5 veces (5-4-3-2-1)
    

    for(let index2 = index; index2>0; index2--){ // creo una array al que le paso la ubicacion 
        // y se lo paso a un array
        array2.push(index2);
    }
    text = array2.join(''); //Lo concateno en texto y lo imprimo
    console.log(text);
    array2 = [];
    

}