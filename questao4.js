/*
Questão 04: Escreva uma arrow function chamada ehPar que recebe um número 
como parâmetro e retorna true se o número for par e false se for ímpar. 
 */ 
// Questão 04: Verifica se um número é par
const ehPar = (numero) => numero % 2 === 0 ? true : false;

// Exemplo de uso
console.log(ehPar(7)); // Saída: false
console.log(ehPar(10)); // Saída: true
