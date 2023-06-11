//! Función con efectos secundarios

let outsider = 4

function sum (num) {
   return num + outsider
}

console.log(sum(10))

//! Función sin efectos secundarios

function sumGenial (num1, num2) {
   return num1 + num2
}

console.log(sumGenial(10, 24))