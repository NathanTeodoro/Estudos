//callback seria uma chamada de função
//passada como argumento

let users = ["Nathan", "Esther", "Rosinêa", "Betânia"];

//temos uma lista de usuarios

function insertUser(name , callback){
    setTimeout(()=>{
        users.push(name);
         callback() //esse callback e mostra q so queremos executar
                    //a proxima função quando essa acabar
    }, 1000);
}

//uma função que adiciona um nome a nossa lista com 
//espera de 1s 

function usersList(){
    console.log(users)

}

//aqui imprimimos a lista de usuarios

insertUser("José" , usersList);

//aqui inserimos "Jose" e chamamos a função q add 
// a lista