const arrayexerc5: { name: string, email: string, role: string }[] =
    [
        { name: "Rogério", email: "roger@email.com", role: "user" },
        { name: "Ademir", email: "ademir@email.com", role: "admin" },
        { name: "Aline", email: "aline@email.com", role: "user" },
        { name: "Jéssica", email: "jessica@email.com", role: "user" },
        { name: "Adilson", email: "adilson@email.com", role: "user" },
        { name: "Carina", email: "carina@email.com", role: "admin" }
    ]
const filterExerc5 = arrayexerc5.filter(parametro => parametro.role === "admin").map((filtrado) => {
    return filtrado.email 
})
console.log(filterExerc5)