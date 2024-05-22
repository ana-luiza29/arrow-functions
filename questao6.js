/*
Questão 06: Escreva uma arrow function chamada ehPrimo que recebe um número 
como parâmetro e retorna true se o número for primo e false se não for. 
*/ 
const ehPrimo = (numero) => {
    if (numero <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  };
  
  // Exemplo de uso:
  console.log(ehPrimo(7)); // Saída: true
  console.log(ehPrimo(12)); // Saída: false