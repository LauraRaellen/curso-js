// function criaPessoa (nome, sobrenome, idade) {
//     return {
//         nome,
//         sobrenome,
//         idade
//     }
// }

// const pessoa1 = criaPessoa('Lara','Maria', 23)
// const pessoa2 = criaPessoa('luan','Santana', 44)
// const pessoa3 = criaPessoa('Gisele','Castro', 37)
// const pessoa4 = criaPessoa('Virlene','Moreira', 5)
// const pessoa5 = criaPessoa('Vanessa','araujo', 90)

// console.log(pessoa1.sobrenome);









const pessoa1 = {
    nome:'Lara',
    sobrenome:"Lala",
    idade: 25,

    fala () {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
}