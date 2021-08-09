let lista = [1,2,5,7];
let listaIncluir = [3,4];

const listResult = [1,2, ...listaIncluir, 5];

console.log(listResult);

//com o spread operator da para criar uma copia sem alterar os indices
let arr = ['a', 'b', 'c'];
let arr2 = [...arr];

arr2.push('d');

console.log(`Arr = ${arr}`);
console.log(`Arr = ${arr2}`);