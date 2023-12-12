var nota1 = 3
var nota2 = 5
var media = nota1+nota2/2
var conceito = ""
    if(media >= 8){
        conceito = "otimo"
    }
    else if(media >= 7 ){
        
        conceito = "regular"
    }
    else if(media > 6){
        conceito = "media"
    }
    else{
        conceito = "reprovado"
    
    };

    switch(conceito){
        case "otimo":
            console.log("parabens vc e otimo")
            break;
        case "regular":
            console.log("parabens mas se esforçe mais")
            break;
        case "media":
            console.log("parabens, ESTUDE!")
            break;
        case "reprovado":
            console.log("reprovado")
            break;
        default:
            console.log("Houve um erro")
           
        }