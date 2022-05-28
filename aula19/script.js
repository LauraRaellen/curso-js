/* 
Primitivos são valores (imutáveis) - string, number, boolean, undefinid, null, (bigint, symbol) - Valor copiados

Referência (mutável) - array, object, function
*/
// let a = 'A';
// let b = a;// <= Copia ---
// console.log(a, b);

// a = 'Outra coisa';
// console.log(a, b);

let a = [1, 2, 3];
let b = a;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop()
console.log(a, b);