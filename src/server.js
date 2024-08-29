import express from "express"
import { config } from "dotenv"

config()

const port = process.env.PORT || 3000

const app = express()
app.use(express.json())

const guloseimas = [
    {
        id: 1,
        nome:"Trufa",
        preco:8.50
    },
    {
        id:2,
        nome:"Sorvete",
        preco:0.5
    },
    {
        id:3,
        nome:"Trento de nutella",
        preco:3.50
    }
]

const filmesMarcantes = [
    {
        id: 1001,
        nome:"Velozes e Furiosos",
        genero: "Ação",
        emCartaz: false
    },
    {
        id:1002,
        nome:"É assim que acaba",
        genero: "Romance",
        emCartaz: true
    },
    {
        id:1003,
        nome:"Meu Malvado Favorito 4",
        genero: "Animação",
        emCartaz: true
    }
]

app.get("/",(req, res) => {
    return res.status(200).send({ message: "Hello,World!" })
});

app.get("/doces",(req, res) => {
    return res.status(200).send(guloseimas);
});

app.get("/filmes",(req, res) => {
    return res.status(200).send(filmesMarcantes);
});

app.listen(port, () => {
    console.log(`✨ Server started on http://localhost:${port}`)
})