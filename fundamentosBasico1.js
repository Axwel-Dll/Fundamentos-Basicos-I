/*1 Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255 */
function numeros() {
    var arr = [];
    for(var i=0; i<=255; i++){
        arr.push(i);
    }
    return arr;
}
console.log(numeros());

/*2 Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - 
Puedes usar un operador de módulo para este ejercicio. */
function sumaPares() {
    var sum = 0;
    for(var i=1; i<=1000; i++){
        if(i % 2 == 0){
            sum += i;
            // console.log(sum)
        }
    }
    return sum;
}
console.log(sumaPares());

/*3 Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).*/
function sumaImpares() {
    var sum = 0;
    for(var i=1; i<=5000; i++){
        if(i % 2 != 0){
            sum += i;
            // console.log(sum)
        }
    }
    return sum;
}
console.log(sumaImpares());

/*4 Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej: [1,2,5] retorna 8. [-5,2,5,12] retorna 14). */
function suma(arr){
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(suma([1,2,5]));

/*5 Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). */
function max(arr){
    var max = Math.max(...arr);
    console.log(max);
}
max([-3,3,5,7]);

/*6 Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).*/
function promedio(arr) {
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}
console.log(promedio([1,3,5,7,20]));

/*7 Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.*/
function impares(){
    var arr = [];
    for(var i=1; i<=50; i++){
        if(i % 2 != 0){
            arr.push(i);
        }
    }
    return arr;
}
console.log(impares());

/*8 Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). */
function mayoresY(arr, y){
    var contador = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] > y){
            contador += 1;
        }
    }
    return contador;
}
console.log(mayoresY([1,3,5,7],3));

/*9 Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).*/
function alCuadrado(arr){
    for(var i=0; i<arr.length; i++){
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}
console.log(alCuadrado([1,5,10,-2]));

/*10 Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]). */
function negativos(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}
console.log(negativos([1,5,10,-2]));

/*11 Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]). */
function arrayMaxMinAvg(arr) {
    var min = arr[0];
    var max = arr[0];
    var sum = 0;
    var avg = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } 
        else if (arr[i] < min) {
            min = arr[i];
        }
        sum += arr[i];
    }
    avg = sum/arr.length;
    var newArr = [max,min,avg];
    return newArr;
}
console.log(arrayMaxMinAvg([1,5,10,-2]));

/*12 Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). */
function cambiarValores(arr){
    var primero = 0;

    primero = arr[0];
    arr[0] = arr[arr.length -1];
    arr[arr.length - 1] = primero;
    return arr;

}
console.log(cambiarValores([1,5,10,-2]));

/*13 De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].*/
function reemplazarNegativos(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 'Dojo';
        }
    }
    return arr;
}

console.log(reemplazarNegativos([-1,-3,2]));  