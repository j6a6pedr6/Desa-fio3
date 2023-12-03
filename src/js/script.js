class hero{
    constructor(nome, idade, tipo) {
       this.nome = nome
       this.idade = idade
       this.tipo = tipo
    }
}


let heroi = new hero ("Jorge", 33, "guerreiro")

let attack = "espada"

if (tipo = "guerreiro") {
    attack = "espada"
} else if (tipo = "monge") {
    attack = "artes marciais"
} else if (tipo = "mago") {
    attack = "magia"
} else if (tipo = "ninja") {
    attack = "shiriken"
}

console.log("o " + heroi.tipo + " atacou usando " + attack)