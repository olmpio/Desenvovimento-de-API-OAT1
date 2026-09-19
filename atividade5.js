function analisarNumeros(arrayDeNumeros) {
  if (!arrayDeNumeros || arrayDeNumeros.length === 0) {
    return "O array não pode estar vazio!";
  }

  const total = arrayDeNumeros.length;
  const maior = Math.max(...arrayDeNumeros);
  const menor = Math.min(...arrayDeNumeros);

  const soma = arrayDeNumeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0);
  const media = parseFloat((soma / total).toFixed(2));

  const pares = arrayDeNumeros.filter(numero => numero % 2 === 0).length;
  const impares = total - pares;

  return {
    total: total,
    maior: maior,
    menor: menor,
    media: media,
    pares: pares,
    impares: impares
  };
}

const resultado = analisarNumeros([12, 5, 8, 130, 44, 3]);
console.log(resultado);