//bubble sort - valores pesados no fundo e valores leves no inicio

var valores = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function bubbleSort() {
    let inicio = 0;
    let fim = 10;
    let tmp;
    
    for(vezes = 0; vezes<10; vezes++) {
        for(pos = inicio; pos < fim-1-vezes; pos++) {
            if(valores[pos] > valores[pos+1]) {
                tmp = valores[pos];
                valores[pos] = valores[pos+1];
                valores[pos+1] = tmp;
            } 
         }
    }
    
}

bubbleSort();
console.log("Vetor ordenado...");
console.log(valores)