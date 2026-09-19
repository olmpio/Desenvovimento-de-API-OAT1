function contarCaracteres(texto) {
  const textoLimpo = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  let vogais = 0;
  let consoantes = 0;
  let espacos = 0;
  let especiais = 0;

  for (let i = 0; i < textoLimpo.length; i++) {
    const char = textoLimpo[i];

    if (/[aeiou]/.test(char)) {
      vogais++;
    } else if (/[a-z]/.test(char)) {
      consoantes++;
    } else if (char === " ") {
      espacos++;
    } else {
      especiais++;
    }
  }

  const total = texto.length;

  return {
    vogais: vogais,
    consoantes: consoantes,
    espacos: espacos,
    especiais: especiais,
    total: total
  };
}

const resultado = contarCaracteres("Desenvolvimento de APIs REST!");
console.log(resultado);