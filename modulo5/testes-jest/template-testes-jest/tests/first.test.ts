describe("Teste Jest", () => {
    test("Exerc01", () => {
        const Exerc01 = (string: string): string => {
            return string.toUpperCase()
        }
        expect("FULANO").toEqual(Exerc01("fulano"))
    })
    test("Exerc02", () => {
        const Exerc02 = (string: string): string[] => {
            return string.split("")
        }
        expect(["d", "e", "v"]).toEqual(Exerc02("dev"))
    })
    test("Exerc03", () => {
        const Exerc03 = (string: string): number => {
            return +(string)
        }
        expect(3).toEqual(Exerc03("3"))
    })
    test("Exerc04", () => {
        const Exerc04 = (string: string): number => {
            return string.length
        }
        expect(6).toEqual(Exerc04("fulano"))
    })
    test("Exerc05", () => {
        const Exerc05 = (): number => {
            const min = 1
            const max = 10
            const result = Math.floor(Math.random() * (max - min + 1)) + min

            return result
        }
        expect(1).toBeLessThanOrEqual(Exerc05())
    })
    test("Exerc06", () => {
        interface ITask {
            id: string,
            name: string
        }
        const tasks: ITask[] = [
            {
                id: "1",
                name: "Fazer almoço"
            },
            {
                id: "2",
                name: "Estudar testes com Jest"
            },
            {
                id: "3",
                name: "Astrodev"
            }
        ]
        const task: ITask = {
            id: "3",
            name: "Astrodev"
        }
        expect(tasks).toContainEqual(task)
    })
    test("Exerc07", () => {
        const Exerc07 = (array: number[]): number => {
            let totalSum = 0

            for (let n of array) {
                totalSum += n
            }

            const average = Math.ceil(totalSum / array.length)

            return average
        }
        expect(7).toEqual(Exerc07([10, 4, 7, 6]))
    })
    test("Exerc08", () => {
        const Exerc08 = (anoUser: number): number => {
            const anoAtual = new Date().getFullYear()
            const Idade = anoAtual - anoUser

            return Idade
        }
        expect(19).toEqual(Exerc08(2003))
    })
    test("Exerc09", () => {
        const Exerc09 = (dataUser: string): string => {
            const date = new Date(dataUser)
            const dataFormatada = date.toLocaleDateString()
            return dataFormatada
        }
        expect("26/09/2022").toEqual(Exerc09("2022/09/26"))
    })


})