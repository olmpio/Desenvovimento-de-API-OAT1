
function gerarTabuada(numero,limite = 10 ){

  const tabuada = [];

  for (let i = 1; i <= limite; i++){

    tabuada.push(`${numero} X  ${i} = ${numero * i}`)

  }

  return tabuada;

}

const resultado = gerarTabuada (5,50);
console.log(resultado);
