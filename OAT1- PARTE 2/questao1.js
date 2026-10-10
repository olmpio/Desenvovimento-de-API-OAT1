const express = require ('express');

const app = express();

app.use(express.json());

let filmes = [{id: 1, titulo: "O Poderoso Chefão", ano: 1972, genero: "Drama"},
    {id: 2, titulo: "Matrix", ano: 1999, genero: "Ficção Científica"}
];
    
app.get('/filmes',(req,res) => {
    return res.status(200).json(filmes);
});

const porta = 5500;
app.listen(porta,() => {

    console.log(`Servidor UnexFlix rodando na porta ${porta}`)
});
