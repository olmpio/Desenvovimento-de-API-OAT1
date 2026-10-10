const express = require ('express');

const app = express();

app.use(express.json());

let filmes = [{id: 1, titulo: "O Poderoso Chefão", ano: 1972, genero: "Drama"},
    {id: 2, titulo: "Matrix", ano: 1999, genero: "Ficção Científica"}
];

app.get('/filmes', (req, res) => {
  return res.status(200).json(filmes);
});

app.get('/filmes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const filme = filmes.find(f => f.id === id);

  if (!filme) {
    return res.status(404).json({ erro: "Filme não encontrado" });
  }

  return res.status(200).json(filme);
});

const PORTA = 3000;
app.listen(PORTA, () => {
  console.log(`Servidor UnexFlix rodando na porta ${PORTA}`);
});
