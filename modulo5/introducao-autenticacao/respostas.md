### Exercicio 01
A) O uso de string's em id possibilita a variedade de chaves em uma determinada quantidade limitada de caracteres
B) /services/generateId.ts

### Exercicio 02
A) O codigo tem sua funcionalidade para que faça a conexão no banco de dados, utilize a tabela chamada "User"
E faça a função createUser, inserindo id, email e password
B) CREATE TABLE User (
id VARCHAR(255) PRIMARY KEY,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL
);

### Exercicio 03 
A) O comando as string, certifica para o typescript que o que ira retornar da função é uma string
B)
generateToken(id: string) {

        const token = jwt.sign(
            {
                id
            },
            process.env.JWT_KEY as string,
            {
                expiresIn
            }
        );

        return token
    }

### Exercicio 04
A,B,C)
async insertUser(req: Request, res: Response) {
        try {
            const { email, password } = req.body
            if (!email || email.indexOf("@") === -1) {
                res.status(400).send("Invalid email")
            }
            if (!password || password.length < 6) {
                res.status(400).send("Invalid password")
            }
            const id = generateId()
            const userData = new UserData()
            await userData.createUser(id, email, password)
            const generateToken = new GenerateToken()
            const token = generateToken.generateToken(id);

            res.status(200).send({
                token,
            });

        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
### Exercicio 05
    getUserByEmail = async (email: string): Promise<any> => {
        const result = await this.getConnection()
            .select("*")
            .from(this.userTableName)
            .where({ email });

        return result[0];
    }
### Exercicio 06
async searchUser(req: Request, res: Response) {
        try {
            const { email, password } = req.body
            if (!email || email.indexOf("@") === -1) {
                res.status(400).send("Invalid email")
            }
            const userData = new UserData()
            const user = await userData.getUserByEmail(email)
            if (user.password !== password) {
                res.status(400).send("Invalid password")
            }
            const generateToken = new GenerateToken()
            const token = generateToken.generateToken(user.id)

            res.status(200).send({
                token,
            });

        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }

### Exercicio 07
A linha de as any certifica que o que ira vir uma any, tipando a função, porendno receber alem de uma string caso o token chegue algo que nao seja uma string

const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};