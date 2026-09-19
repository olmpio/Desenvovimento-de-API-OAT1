function encontrarMaiorPalavra(frase) {
  const fraseLimpa = frase.replace(/[^\w\sÀ-ÿ]/g, "");
  const palavras = fraseLimpa.split(/\s+/);
  
  let maiorPalavra = "";
  
  for (let i = 0; i < palavras.length; i++) {
    const palavraAtual = palavras[i];
    if (palavraAtual.length > maiorPalavra.length) {
      maiorPalavra = palavraAtual;
    }
  }

  return {
    palavra: maiorPalavra,
    tamanho: maiorPalavra.length
  };
}

const resultado = encontrarMaiorPalavra("O desenvolvimento de microsserviços e APIs é essencial.");
console.log(resultado);
