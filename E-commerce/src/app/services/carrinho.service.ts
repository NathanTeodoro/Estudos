import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root',
})

export class CarrinhoService{

    itensNoCarrinho:any[]=[];

    addcarrinho(item:any){
        
        return this.itensNoCarrinho.push(item)
        
    }
    mostrarcarrinho(){
        console.log(this.itensNoCarrinho)
        return this.itensNoCarrinho;
    }
}