function distribuirTimes(listaDeNomes, quantidadeDeTimes) {
  const nomesEmbaralhados = [...listaDeNomes];
  
  for (let i = nomesEmbaralhados.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [nomesEmbaralhados[i], nomesEmbaralhados[j]] = [nomesEmbaralhados[j], nomesEmbaralhados[i]];
  }

  const times = [];
  for (let i = 0; i < quantidadeDeTimes; i++) {
    times.push([]);
  }

  for (let i = 0; i < nomesEmbaralhados.length; i++) {
    const indiceTime = i % quantidadeDeTimes;
    times[indiceTime].push(nomesEmbaralhados[i]);
  }

  return times;
}

const resultado = distribuirTimes(["Alex", "Pedro", "Carlos", "Diana", "Eduardo", "Fernanda"], 2);
console.log(resultado);