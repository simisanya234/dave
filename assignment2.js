/*1
function createArray(elements) {
    return Array.from(elements)
}
const elements = [1,2,3,4,5];
const array = createArray(elements);
console.log(array);

//2
function modifyArray(array,index,newValue) {
if (index >= 0 && index < array.length){

    array[index] = newValue;
}
 return array;
}
const num = [1,2,3,4,5];
console.log(modifyArray(array, 2, 10));

// 3
function calculatrSum(array) {
    return array.reduce((a, b) => a + b,0);
}
const dig = [1,2,3,4,5];
console.log(calculatrSum(array));

//4
function maxAndMin(array) {
    return{
        max:Math.max(...array),
        min:Math.min(...array)
    };
}
const number = [2,3,4,5,6];
console.log(maxAndMin(array));
*/
//5
function count(array) {
    const frequency = {};
    array.forEach((element) => {
        frequency[element] = (frequency[element] )+1 
    });
return frequency
}
const array = [1,2,2,3,3,4,4,4,4]
console.log(count(array));
