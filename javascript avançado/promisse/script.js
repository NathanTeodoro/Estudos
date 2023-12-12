//callback seria uma chamada de função
//passada como argumento

let users = ["Nathan", "Esther", "Rosinêa", "Betânia"];

//temos uma lista de usuarios

function insertUser(name){
   let promise = new Promise(function(resolve , reject){
    setTimeout(() => {
        users.push(name);

        let error = false; //definimos error = false
//pois a chance de erro nesse script simples e 0     
        if(!error){
            resolve();
        }//acontecendo um erro aqui resolve-se 
        else{
            reject({msg:"error"});
        }//inserção negada
    }, 1000)
   })
     return promise
     
}

//uma função que adiciona um nome a nossa lista com 
//espera de 1s 

function usersList(){
    console.log(users)

};

//aqui imprimimos a lista de usuarios

insertUser("José")
.then(usersList)
.catch((error)=>{ // forçamos um erro e printamos msg erro
    console.log(error.msg)
})

//aqui inserimos "Jose" e chamamos a função q add 
// a lista