// Strings
let nome = "Pedro" // let permite que o valor da variável seja alterado
const sobrenome = 'Santos' // const não permite alteração do valor
let templateString = `O meu nome é ${nome} ${sobrenome}`;
nome = `João`;
//sobrenome = `Nunes`; TypeError
console.log(templateString);

//number
let A = 2;
let B = 5.56;
let C = 3.14;
const PI = 3.14;
let potencia = A ** C; // Outros Operadores: +, -, /, %
console.log(typeof A);
console.log(typeof C);
console.log(`${A}^${C}=${potencia}`);

//Boolean
let verdadeiro = true;
let falso = false;
console.log(typeof verdadeiro);

// Operadores logicos 
let E = verdadeiro && falso;
let Ou = verdadeiro || falso;
console.log(E);
console.log(Ou);

let maior_que = B > A; // Outros: >=, <, <=, ==, !=
console.log(`${B}>${A}=${maior_que}`);

//Arrays
let numeros = [1, 3.14, -7, 99, 505.67];
console.log(numeros);
console.log(`Numeros[0]=${numeros[0]}`); //Usando o indice para acessar
console.log(`Numeros[3]=${numeros[3]}`); //Comece na posição 0 
console.log(typeof numeros);

// Object
// Podem ser compostos por atributos de todos os tipos
let pessoa = {
    nome: `João`,
    cpf: 123,
    telefones: [619999999999, 62999999999]
};
console.log(pessoa);
console.log(`pessoa.nome = ${pessoa.nome}`);
