class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }
    // ### Exercicio 05)
    public getIntro(): string {
        return `Olá, sou ${this.getName()}. Bom dia!`
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }
    public getPassword(): string {
        return this.password
    }
}
const user01: User = new User("01", "email@o1", "Nome01", "Senha0o1")
// console.log(user01)
// ### Exercicio 01)
// A) Possivel sim.
// B)1x a msg foi chamada
//
// ### Exercicio 02)
class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}
const user02: User = new Customer("01", "email@o1", "Nome01", "Senha0o1", "Cartao de credito")
// console.log(user02)
// A) Foi impressa 1x
// B) Foram impressas 2x, pois não comentei o console.log do exercicio anterior
// 
// ### Exercicio 03)
// A) é possivel, pois estão interligados
// ### Exercicio 04)
// console.log(user02.getEmail(), user01.getPassword(), user01.getIntro())

// ### Exercicio 01)
export interface Client {
    name: string;
    // Refere-se ao nome do cliente

    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
    // como se fosse um id

    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês

    calculateBill(): number;
    // Retorna o valor da conta em reais
}
const client01: Client = {
    name: "User01",
    registrationNumber: 1,
    consumedEnergy: 10,

    calculateBill: () => {
        return 2
    }
}
console.log(client01)
// A)Name, registr,consum e calculate, porem o calculate me retornou uma function

// ### Exercicio 02)
export abstract class Place {
    constructor(protected cep: string) { }

    public getCep(): string {
        return this.cep;
    }
}
const exerc02: Place = new Place("cep01")
//  A) Não é possível criar uma instância de uma classe abstrata.
//  B) Adicionar uma parametro privado para deixar de ser abstrata
// ### Exercicio 03

