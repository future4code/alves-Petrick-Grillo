### Exercicio 01 
A) round é a quantidade de caracteres que o usuario possui em sua senha, salt é o nomedado a geração de uma string aleatoria no final do hash, os valores recomendados para o round sao superiores a 12 digitos, 12, para testes
B e C)
public generateHash = async (plaintext: string) => {
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        const hash = await bcrypt.hash(plaintext, salt)

        return hash
    }

    public compare = async (plaintext: string, hash: string) => {
        return bcrypt.compare(plaintext, hash)
    }

### Exercicio 02
A) O endpoint de cadastro, visto que garantiria a codificação da senha do usuario e o login em "tese" somente o usuario saberia, nao seria algo "importante" algo de extrema urgencia.
B)
const hashGenerate = new HashManager()
const passwordHash = await hashGenerate.generateHash(password)
C)
const hashManager = new HashManager()
const isPasswordCorrect = hashManager.compare(password, user.password)
D)Não, visto que comparamos com id, e nao com a senha do usuario
