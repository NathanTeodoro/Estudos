function speak(){
    console.log(this.sound)
}
let dog ={
    sound : "au au",
    speak : speak
}
let cat = {
    sound : "miau",
    speak : speak
}
dog.speak()
cat.speak()

let bindedFunction = speak.bind(dog)
//com o metodo bind especificamos o escoṕo obj referente no caso a cima dog