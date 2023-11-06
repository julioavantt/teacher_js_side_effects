//! Función con efectos secundarios

let outsiderShared = "Eeee";

function sum(num) {
  console.log(outsiderShared);
  return num + outsiderShared;
}

console.log(sum(10));

function confioEnOutsideShared() {
  return outsiderShared;
}

console.log(confioEnOutsideShared());

//! Función sin efectos secundarios

function sumGenial(num1, num2) {
  return num1 + num2;
}

console.log(sumGenial(1, 1));
