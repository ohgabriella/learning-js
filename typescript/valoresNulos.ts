//existe uma regra que checa se eu estou deixando algo nulo
let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: String,
    telefone?: string
}

const contato: Contato = {
    nome: 'Gabis'
}