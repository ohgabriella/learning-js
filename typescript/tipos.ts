/*os tipos sao declarados minusculos*/

//boolean
const contaPaga: boolean = false;

//number
const idade: number = 23;
const avaliacao: number = 4.5;

//string
const nome: string = 'Gabriella';

//array
const idades: number[] = [23, 28, 45];
const idades2: Array<number> = [23, 40, 45];

//tuple
let jogadores: [string, string];
jogadores = ['Vitor', 'Fulano'];

//enum
enum StatusAprovacao {
    Aprovado,
    Pendente,
    Rejeitado
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Pendente;

// any
const retornoDaApi: any[] = ['Gabriella', 28];
const retornoDaApi2: any = {
    //...
};

//void
function printTela(msg: string): void {
    console.log('msg')
}

// null e undefined
const u: undefined = undefined;
const n: null = null;

// object - quando tem um tipo nao primitivo e voce precisa armazenar ele
function criar(objeto: object) {
    // ...
}

criar({
    propriedade: 1,
})

// never - uma funcao que nunca termina
function loopInfinito(): never {
    while(true) { }
}    

function erro(mensagem: string): never {
    throw new Error(mensagem);
}

function falha() {
    return erro('algo deu errado');
}

// union types
const nota: string | number = 5;

function exibirNota(nota: number | string) {
    console.log(`A nota é essa ${nota}`)
}
exibirNota('10');

// alias
type Funcionarios = Array<string> | number | boolean
const funcionarios: Funcionarios = ['Victor', 'Fulano', 'Cicrano'];

//type assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString();