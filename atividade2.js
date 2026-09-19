function calcularIMC(peso,altura){

    const valor = peso / (altura **2);
    let calculo = "" ;

    if (valor < 18.5 ) { 
        calculo = 'Abaixo do Peso!';
    }
     else if  ( valor >= 18.5 && valor <= 24.9){
        calculo = 'Peso Normal';
    } 
    else if (valor >= 25.0 && valor <= 29.9){
        calculo = 'Sobrepeso';
    }
    else if (valor >= 30.0 && valor<= 34.9){
        calculo = 'Obesesidade Grau I';
    }
    else if (valor >= 35. && valor <= 39.9){
        calculo = 'Obesisade Grau II';
    }
    else if (valor>= 40){
        calculo= 'Obesidade Mórbita // Obesisade Grau III '
    }
    return{
        imc: Number(valor.toFixed(2)),
        calculo:calculo
    };
} 

const pessoa1 = calcularIMC(110,1.77);
console.log(pessoa1);

const pessoa2 = calcularIMC(54,1.44);
console.log(pessoa2);

const pessoa3 = calcularIMC(77,1.21);
console.log(pessoa3);

const raul = calcularIMC(90,1.70);
console.log(raul);

const iago = calcularIMC(80,1.87)
console.log(iago);