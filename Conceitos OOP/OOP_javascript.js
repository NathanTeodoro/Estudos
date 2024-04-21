// Aqui vamos explorar alguns fundamentos da orientação a objetos com javascript

/**
 * classes
 * instancias
 * heranças
 * encapsulamento
 * polymorphism
 * classes abtratas
*/

//      Primeiras classes

class Animal{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }

    info(){
        return(
            `O nome do animal e ${this.nome} e sua idade e ${this.idade} anos.`
        )
}
}

//      Instancias
/*
criamos uma classe acima que constroi um obj com 2 argumentos(nome e idade)
agora podemos contruir um objetos e usar a função info para ver informações sobre o objeto.
*/
let primeiroanimal = new Animal ("Pedro", 2, "passaro")
console.log(primeiroanimal)
console.log(primeiroanimal.info())

let segundoanimal = new Animal ("Vandercleide", 5, "peixe")
console.log(segundoanimal)
console.log(segundoanimal.info())

let terceiroanimal = new Animal ("Nina", 4 , "cão")
console.log(terceiroanimal)
console.log(terceiroanimal.info())

let quartoanimal = new Animal ("Cirilo", 3 , "cão")
console.log(quartoanimal)
console.log(quartoanimal.info())

let quintoanimal = new Animal ("Laika", 2 ,"cão")
console.log(quintoanimal)
console.log(quintoanimal.info())

let sextoanimal = new Animal ("Rondercleiversson I", 3 , "peixe")
console.log(sextoanimal)
console.log(sextoanimal.info())

let setimoanimal = new Animal ("Rondercleiversson II", 2 , "peixe")
console.log(setimoanimal)
console.log(setimoanimal.info())

console.log("-------------------------------------")

//      Herança

class especie extends Animal {
    constructor(nome, idade , especie){
        super(idade, nome)
        this.especie = especie
    }
    info(){
        return(
            `O nome do animal e ${this.nome} e sua idade e ${this.idade} anos ele(a) e um ${this.especie}`
        )
        }
}

let  oitavoanimal = new especie("jerald", 3, "cão")
console.log(oitavoanimal)
console.log(oitavoanimal.info())
// na função info acima diferente da primeira vez chamada, o retorno mostra a especie.

console.log("-------------------------------------")

//      Encapsulamento

/*
 e um meio de restringir acesso a dados, so conseguimos acessar tais dados com certos metodos.
*/

class raça extends Animal{
    #raça // => marcada como privada.
    constructor(nome, idade , especie , raça){
        super(nome,idade)
        this.especie = especie
        this.#raça = raça
    }

    mostrarRaça(){
        return this.#raça
        
    }

    definirRaça(raça){
        this.#raça = raça
    }
    info(){
        return(
            `O nome do animal e ${this.nome}, ele tem ${this.idade} anos, ele(a) e um ${this.especie} da raça ${this.mostrarRaça()}.`
        )
        }
    som(){
        if(this.especie==="cão"){
            return 'Wof wof'
        }
        if(this.especie==="peixe"){
            return 'bloop bloop??'
        }
    }
}
segundoanimal = new raça( "Vandercleide", 5, "peixe" , "palhaço")
console.log(segundoanimal.info())
segundoanimal.definirRaça('Betha') //aqui mudamos a raça do peixe
console.log(segundoanimal.info()) // estamos usando variaveis comuns mas podemos alterar valores de objetos tipos constantes.

console.log("-------------------------------------")
//      Polymorphism
/*
basicamente usa herança para reutilizar methodos com algumas alterações
*/
console.log(segundoanimal.som()) // ultilizamos o metodo som
terceiroanimal = new raça("Nina", 4 , "cão", "vira-lata")
console.log(terceiroanimal.som()) 
// reultilizamos o metodo som() e obtemos um retorno diferente por causa de uma condição
// poderiamos instanciar de formas diferentes e reutilizar o metodo, 

/* class cão extends Animal{
        som(){
            return 'wof'
        }
    }

    class gato extends Animal{
        som(){
            return 'miau'
        }
    }

*/
console.log("-------------------------------------")


