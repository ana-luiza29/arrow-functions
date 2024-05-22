/*
Questão 05: Escreva uma arrow function chamada maiorNumero que recebe dois 
números como parâmetros e retorna o maior deles. 
 */ 
const maiorNumero = (numero1, numero2) => {
    return Math.max(numero1, numero2);
  };
  
  // Exemplo de uso:
  console.log(maiorNumero(10, 5)); // Saída: 10
  console.log(maiorNumero(3, 9)); // Saída: 9