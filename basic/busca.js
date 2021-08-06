// busca sequencial

var valores = [5, 8, 10, 22, 45, 38];

function buscaPosicao(num) {
    for(let i=0; i<6; i++) {
        if(num == valores[i]){
            return i;
        }
    }
    return -1;
}

console.log(buscaPosicao(5));

//busca binaria - exige um prerequisito, os valores tem que estar ordenados
//a complexidade é sempre de ordem logaritmica

var valoresOrdenados = [5, 8, 10, 22, 38, 45, 50, 60, 90];

function buscaBin(num) {
    let inicio, fim, meio;
    inicio = 0;
    fim = 9;

    while(inicio <= fim){
        meio = parseInt((inicio + fim)/2)
        if(num == valores[meio]){
            return meio;
        } else {
            if(num > valores[meio]) {
                inicio = meio + 1;
            } else {
                fim = meio - 1;
            }
        }
    }

    return -1;

}

console.log(buscaBin(8));