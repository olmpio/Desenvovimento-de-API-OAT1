function gerarTokenAleatorio(tamanho = 8, tipo = "alfanumerico") {
  let caracteres = "";

  if (tipo === "numerico") {
    caracteres = "0123456789";
  } else if (tipo === "letras") {
    caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  } else {
    caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  }

  let token = "";

  for (let i = 0; i < tamanho; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    token += caracteres[indiceAleatorio];
  }

  return token;
}

console.log(gerarTokenAleatorio(8, "alfanumerico"));
console.log(gerarTokenAleatorio(6, "numerico"));