class hero{
    constructor(nome, idade, tipo) {
       this.nome = nome
       this.idade = idade
       this.tipo = tipo
    }
}


let heroi = new hero ("Jorge", 33, "guerreiro")

let attack = "espada"

console.log("o " + heroi.tipo + " atacou usando " + attack)