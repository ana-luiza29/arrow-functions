/*
Questão 08: Escreva uma arrow function chamada ehPalindromo que recebe uma 
string como parâmetro e retorna true se a string for um palíndromo (ou seja, se ela 
pode ser lida da mesma forma tanto da esquerda para a direita quanto da direita para 
a esquerda) e false caso contrário.
*/ 
const ehPalindromo = (string) => {
    const reversedString = string.split("").reverse().join("");
    return string === reversedString;
  };
    
  // Exemplo de uso:
  console.log(ehPalindromo("radar")); // Saída: true
  console.log(ehPalindromo("banana")); // Saída: false  // Exemplo de uso:
  console.log(ehPalindromo("radar")); // Saída: true
  console.log(ehPalindromo("banana")); // Saída: false