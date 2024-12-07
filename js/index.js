'use strict';

// Примітивні типи

console.log(typeof 'Hello Maria');   // "string"
console.log(typeof 88);        // "number"
console.log(typeof BigInt(88));// "bigint"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" але це історична помилка JS, null це окремий тип
console.log(typeof Symbol('id')); // "symbol"

// Об'єктні типи

console.log(typeof {}); // "object" (стандартний об'єкт)
console.log(typeof []); // "object" (масив, це як особий вид об'єкту)
