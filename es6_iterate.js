let fruits = [
    "apple", "banana", "orange", "cherries"
]

// for (i=0; i<fruits.length; i++) {
//     console.log(fruits[i]);
// }

console.log('repeat function')
for (let fruit of fruits) {
    console.log(fruit);
}
console.log("");


console.log("forEach function")
fruits.forEach((fruit) => {
    console.log(fruit);
})
console.log("");



console.log("map function");        //array to array output
newFruits = fruits.map((fruit) => {
    console.log(fruit)
 
})


console.log("map function");        //array to array output
newFruit = fruits.map((fruit) => {
    
    return `${fruit} array modified`
})

console.log(newFruit);

console.log("");

console.log("map & filter function");

newFruits = fruits.map((fruit) => {
    console.log(fruit)
    return fruit;
}).filter((value) => {
    if(value == "banana") {
        return false;
    }
    else {
        return true;
    }
})

console.log(newFruits);