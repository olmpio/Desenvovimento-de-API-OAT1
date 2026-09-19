
function calcularContagemRegressiva(dataFutura){
    const agora = new Date().getTime(); 

    const futuro = new Date(dataFutura).getTime();  

    const calculo =  futuro - agora; 

    if(calculo <= 0 ) {
        
      texto: "A data já passou!" 
    
   };
   const segundo = 1000;
   const minuto = segundo * 60;
   const hora = minuto * 60;
   const dia = hora * 24;

    const dias = Math.floor( calculo / dia) 
   const horas = Math.floor((calculo % dia )/ hora)
   const minutos = Math.floor((calculo % hora)/ minuto)
   const segundos = Math.floor((calculo % minuto ) / segundo)

   const texto = `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`

   return { dias, horas, minutos, segundos, texto} ; 

  }

const contagem = calcularContagemRegressiva('2030-06-09T00:28:00');
console.log(contagem);