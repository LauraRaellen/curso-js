const nome = 'Laura';
const sobrenome = 'Raellen';
let idade = 13;
let peso = 41;
let altura =1.6;
let imc;
let anoNascimento = 2009;

imc = peso / (altura * altura);
anoNascimento  = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg`)
console.log(`tem ${altura} de altura e seu IMC é de ${imc},`)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`)
