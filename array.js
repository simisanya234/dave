// creating an Array

let Names = ["wale", "sonto", 10 , true]
console.log(Names);

//accessing array element
console.log(Names[0]);
console.log(Names[1]);
console.log(Names[2]);
console.log(Names[3]);

Names [3] = false
console.log(Names[3]);

//Array method
//.push

let fruits = ['banana', 'Apple','cherry']
console.log(fruits);
let pushedElement = fruits.push('orange')
console.log(fruits);

//.pop
let popedElement = fruits.pop()
console.log(fruits);

// .indexof
console.log(fruits.indexOf('Apple'));

// Array iteration

//using for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//using for of loop
for (i of fruits){
    console.log(i);
}
 //Array.forEach()
 const forEachFruit = fruits.forEach((fruits) =>{

      console.log(fruits + "gg");
 })
console.log(forEachFruit);

//array destruction
let[fruit1, fruit2, fruit3, fruit4 = "mango"] = fruits
console.log(fruit1);
console.log(fruit2);
console.log(fruit4);

let MyArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9] 
]
console.log(MyArray[0][1]);
console.log(MyArray[1][1]);
console.log(MyArray[2][1]);
