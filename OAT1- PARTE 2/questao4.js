app.put('/filmes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { titulo, ano, genero } = req.body;

  const index = filmes.findIndex(f => f.id === id);

  // Se o filme não existir no array, retorna 404
  if (index === -1) {
    return res.status(404).json({ erro: "Filme não encontrado" });
  }

  // Atualiza de forma integral as informações do filme
  filmes[index] = {
    id,
    titulo: titulo !== undefined ? titulo : filmes[index].titulo,
    ano: ano !== undefined ? ano : filmes[index].ano,
    genero: genero !== undefined ? genero : filmes[index].genero
  };

  return res.status(200).json(filmes[index]);
});
