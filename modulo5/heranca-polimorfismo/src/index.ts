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
        // console.log("Chamando o construtor da classe User")
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
        // console.log("Chamando o construtor da classe Customer");
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
// console.log(client01)
// A)Name, registr,consum e calculate, porem o calculate me retornou uma function

// ### Exercicio 02)
export abstract class Place {
    constructor(protected cep: string) { }

    public getCep(): string {
        return this.cep;
    }
}
//  A) Não é possível criar uma instância de uma classe abstrata.
//  B) Adicionar uma parametro privado para deixar de ser abstrata
// ### Exercicio 03
// 1) para criar uma instância de uma classe abstrata
//  precisamos declarar uma classe filha e criar uma instância dessa última.
// 2) Pois ela não possui uma instacia filha, sendo apenas uma especie de esqueleto
// 3) Pois nao possui uma outro classe para chama-la
export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        // Refere-se ao número de moradores da casa

        cep: string
    ) {
        super(cep);
    }
}
export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        // Refere-se à quantidade de andares do lugar

        cep: string
    ) {
        super(cep);
    }
}
export class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        // Refere-se à quantidade de máquinas do local 

        cep: string
    ) {
        super(cep);
    }
}

// const exerc02A: Residence = new Residence(1,"ceep1")
// console.log(exerc02A)
// const exerc02B: Commerce = new Commerce(1,"ceep1")
// console.log(exerc02B)
// const exerc02C: Industry = new Industry(1,"ceep1")
// console.log(exerc02C)

class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string
    ) {
        super(residentsQuantity, cep);
    }

    public getCpf(): string {
        return this.cpf;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75;
    }
}
// const exerc04: ResidentialClient = new ResidentialClient("nome01", 1, 2323, "cpf123", 23, "cep")
// console.log(exerc04)
// console.log(exerc04.calculateBill())
class CommercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity, cep);
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53;
    }

    public getCnpj(): string {
        return this.cnpj;
    }
}
// const exerc05: CommercialClient = new CommercialClient("nome01", 1, 2323, "cpf123", 23, "cep")
// console.log(exerc05)
// console.log(exerc05.getCnpj())
// console.log(exerc05.calculateBill())
//   As diferenças são de acordo com sua moradia, apartamento por exemplo e as semelhanças sao os consumos de energia
//   e seu numero de registro

class IndustrialClinet extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private insdustryNumber: string, // tanto faz ser string ou number
        machinesQuantity: number,
        cep: string
    ) {
        super(machinesQuantity, cep);
    }

    public getIndustryNumber(): string {
        return this.insdustryNumber;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }
}
const exerc06: IndustrialClinet = new IndustrialClinet("nome01", 23, 324, "numeroindustrial", 4, "cep1234")
console.log(exerc06)
// A) Industry, pois o cliente tem conexão com o clienteinsdustrial
// B) Tudo exceto o CEP e machineryQnt que ja continha