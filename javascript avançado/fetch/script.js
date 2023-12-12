const url = 'https://rickandmortyapi.com/api/character/108'

fetch(url)
    .then((res)=>{
        console.log(res)
    })