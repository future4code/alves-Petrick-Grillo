// ### Exercicio 01
// A) O construtor serve para executar ações pré-definidas assim que a função é chamada.
// Para chama-lo utilizasse o this
// 
// B) 1x
// C) Atraves do this
// 
// ### Exercicio 02 e 01
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(cpf: string, name: string, age: number, transactions: Transaction[]) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
        this.transactions = transactions;
    }
    public getCpf() {
        const teste = [`CPF: ${this.cpf}`, this.age, this.transactions]
        return teste
    }
    public getName() {
        return this.name
    }
    public getAge() {
        return this.age
    }
    public getBalance() {
        return this.balance
    }
    public gettransactions() {
        return this.transactions
    }
}
class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(description: string, value: number, date: string,) {
        console.log("Chamando o construtor da classe Transaction")
        this.description = description
        this.value = value
        this.date = date
    }
}
const transaction01: Transaction = new Transaction("descrição01", 23, "121/321/213")
const user01: UserAccount = new UserAccount("1234", "Nome01", 3, [transaction01])
console.log(transaction01)
console.log(`Idade: ${user01.getAge()}`, `Balanço: ${user01.getBalance()}`, user01.getCpf())
//  
// ### Exercicio 03)
class Bank {
    private accounts: UserAccount[]
    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    }
    public getAccount(): UserAccount[] {
        return this.accounts
    }
}
const banco01: Bank = new Bank([user01])
console.log(banco01.getAccount()[0].gettransactions())
