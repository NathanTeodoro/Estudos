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
    }, 10000)
   })
     return promise
     
}

//uma função que adiciona um nome a nossa lista com 
//espera de 1s 

function usersList(){
    console.log(users)

};

async function exec(){
    await insertUser("Jesus");
//essa função q insere jesus na lista de usuarios
//sera executada em 10s colocando async na função 
//await na promisse a função so e executada quando a promisse
//for resolvida 
    usersList();
}
exec();