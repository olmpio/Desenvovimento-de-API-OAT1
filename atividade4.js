
function validarUsuario(usuario) {
  
  const erros = [];

  
  if (!usuario.nome || usuario.nome.trim().length < 3) {
    erros.push("Nome deve ter no mínimo 3 caracteres.");
  }

  const arrobaIndex = usuario.email ? usuario.email.indexOf("@") : -1;
  const pontoAposArroba = arrobaIndex !== -1 && usuario.email.indexOf(".", arrobaIndex) !== -1;

  if (arrobaIndex === -1 || !pontoAposArroba) {
    erros.push("E-mail inválido. Deve conter '@' e ao menos um '.' após o arroba.");
  }

  const temNumero = /\d/.test(usuario.senha); // Regex que verifica se tem algum número
  if (!usuario.senha || usuario.senha.length < 6 || !temNumero) {
    erros.push("Senha deve ter no mínimo 6 caracteres e conter ao menos 1 dígito numérico.");
  }

  if (erros.length > 0) {
    return {
      valido: false,
      erros: erros
    };
  }

  return {
    valido: true
  };
  
}

const imput = validarUsuario({ nome: "teste", email: "teste@gmail.com", senha: "12323213" })
console.log(imput);