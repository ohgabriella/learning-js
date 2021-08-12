class User {
    private cpf: number;

    constructor(public name: string, public lastName: string) {
        this.cpf = 1234567800;
    }
}

const user = new User('Gabriella', 'Barreto');

// Heranca
class Person extends User {

    constructor() {
        super('Ariel', 'Soares')
    }

    
    
}