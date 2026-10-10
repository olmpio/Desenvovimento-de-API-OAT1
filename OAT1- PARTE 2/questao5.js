app.delete('/filmes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = filmes.findIndex(f => f.id === id);

  // Se não encontrar o ID, retorna 404
  if (index === -1) {
    return res.status(404).json({ erro: "Filme não encontrado" });
  }

  // Remove o elemento do array em memória
  filmes.splice(index, 1);

  // Retorna status 204 No Content sem corpo de resposta
  return res.status(204).send();
});
