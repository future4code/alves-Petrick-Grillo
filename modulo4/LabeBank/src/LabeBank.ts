import express, { Request, Response } from "express";
import cors from "cors";
const exercicios = express();

exercicios.use(express.json());
exercicios.use(cors());
type users = {
    nome: string
    CPF: number | string
    nascimento: Date | string
    extrato: extrato
}
type extrato = {
    saldo: number
    data: Date | string
    descricao: string
}
type transfer = {
    nome: string
    cpfUser: number
    nameDest: string
    CPFDest: number
    valorTrans: number
}
let users: users[] = [{
    nome: "Usuario 01",
    CPF: "101.010.100.11",
    nascimento: "11/01/2001",
    extrato: {
        saldo: 0,
        data: "",
        descricao: ""
    }
}, {
    nome: "Usuario 02",
    CPF: "202.020.200.22",
    nascimento: "22/02/2002",
    extrato: {
        saldo: 0,
        data: "",
        descricao: ""
    }
}, {
    nome: "Usuario 03",
    CPF: "303.030.300.33",
    nascimento: "33/03/3003",
    extrato: {
        saldo: 0,
        data: "",
        descricao: ""
    }
}, {
    nome: "Usuario 04",
    CPF: "404.040.400.44",
    nascimento: "44/04/4004",
    extrato: {
        saldo: 0,
        data: "",
        descricao: ""
    }
}]



exercicios.get("/Users", (req: Request, res: Response) => {
    res.send(users)
})

exercicios.post("/addUser", (req: Request, res: Response) => {
    let idade = req.body.nascimento
    let idadeFormatada = idade.split("/")
    let diaUser: number = idadeFormatada[0]
    let mesUser: number = idadeFormatada[1]
    let anoUser: number = idadeFormatada[2]
    const formatarIdadeUsuario = (ano: number, mes: number, dia: number) => {
        let dataAtual = new Date
        const anoAtual = dataAtual.getFullYear()
        const mesAtual = dataAtual.getMonth() + 1
        const diaAtual = dataAtual.getDate()

        ano = +(ano)
        mes = +(mes)
        dia = +(dia)

        let IdadeAtual = anoAtual - ano
        if (mesAtual < mes || mesAtual === mes && diaAtual < dia) {
            IdadeAtual--
        }
        return IdadeAtual
    }
    const idadeUsuario = formatarIdadeUsuario(anoUser, mesUser, diaUser)
    try {
        if (idadeUsuario < 18) {
            res.status(400).send("O usuario precisa ter mais de 18 anos")
        }
        const addUser: users = {
            nome: req.body.nome,
            CPF: req.body.CPF,
            nascimento: req.body.nascimento,
            extrato: {
                saldo: 0,
                data: "",
                descricao: ""
            }
        }
        users.push(addUser)
        res.send({ "Adicionado!": addUser })
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})
exercicios.get("/searchUser/:cpf/", (req: Request, res: Response) => {
    const cpf = req.params.cpf
    const nameUser = req.query.name
    const searchUser = users.find(parametro => parametro.CPF === cpf && parametro.nome === nameUser)
    res.send(searchUser)
})
exercicios.patch("/searchUser/:cpf/", (req: Request, res: Response) => {
    const cpf = req.params.cpf
    const nameUser = req.query.name
    let dataDeposito = req.body.data
    let dataAtual = new Date
    const anoAtual = dataAtual.getFullYear()
    const mesAtual = dataAtual.getMonth() + 1
    const diaAtual = dataAtual.getDate()
    let dataAtualFormatada = diaAtual + "/" + mesAtual + "/ " + anoAtual
    const saldo: extrato = {
        saldo: +(req.body.saldo),
        data: dataAtualFormatada,
        descricao: req.body.descricao
    }
    const searchUser = users.findIndex(parametro => parametro.CPF === cpf && parametro.nome === nameUser)
    users[searchUser].extrato = saldo
    res.status(200).send({ "Deposito feito com sucesso!": users })
})


exercicios.listen(3003, () => {
    console.log("LabeBank rodando 3003!")
});