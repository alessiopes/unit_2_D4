//* Es. 1
//* Costruire un algoritmo in JS per invertire gli elementi in un array.
//? (Input: [0,1,2,3,4,5] -> Output: [5,4,3,2,1,0]) [Niente funzioni di libreria che non sono state viste a lezione].

//* Es. 2
//* Dato un qualsiasi array con numeri interi e stringhe, costruire un algoritmo in JS che triplichi i numeri ed aggiunga un punto finale, invece, alle stringhe.
//? (Input: [1, 2, "Ciao", "Belli"] -> Output: [3, 6, "Ciao!", "Belli!"]).



//! ESERCIZIO 1

let originalArray = [0, 1, 2, 3, 4, 5];
let newArray = [];

for (let i = originalArray.length - 1; i >= 0 ; i--) {
    newArray.push(originalArray[i]);
}

console.log(originalArray);
console.log(newArray);



//! ESERCIZIO 2

const originalArr = [1, 2, "Ciao", "Belli"];
let newArr = [];

for (let i = 0; i < originalArr.length; i++) {
    if (typeof originalArr[i] == "number") {
        newArr.push(originalArr[i] * 3);
    } else if (typeof originalArr[i]  == "string") {
        newArr.push(originalArr[i] + `!`);
    } else {
        newArr.push("");
    }        
}

console.log(originalArr);
console.log(newArr);
