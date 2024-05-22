/*
Questão 07: Escreva uma arrow function chamada contaLetras que recebe uma 
string como parâmetro e retorna um objeto contendo a contagem de cada letra 
presente na string. 
*/ 
const contaLetras = (string) => {
    const contador = {};
    for (let letra of string) {
      if (letra !== " ") {
        if (contador[letra]) {
          contador[letra]++;
        } else {
          contador[letra] = 1;
        }
      }
    }
    return contador;
  };
  
  // Exemplo de uso:
  console.log(contaLetras("hello")); 
  // Saída:  h: 1, e: 1, l: 2, o: 1 
  
  console.log(contaLetras("banana")); 
  // Saída:  b: 1, a: 3, n: 2 