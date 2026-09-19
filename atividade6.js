function celsiusParaFahrenheit(celsius) {
  if (typeof celsius !== 'number') {
    return "Erro: A entrada deve ser um número.";
  }
  
  const fahrenheit = (celsius * 1.8) + 32;
  return parseFloat(fahrenheit.toFixed(2));
}

function fahrenheitParaCelsius(fahrenheit) {
  if (typeof fahrenheit !== 'number') {
    return "Erro: A entrada deve ser um número.";
  }
  
  const celsius = (fahrenheit - 32) / 1.8;
  return parseFloat(celsius.toFixed(2));
}

console.log(celsiusParaFahrenheit(30));    
console.log(fahrenheitParaCelsius(86));