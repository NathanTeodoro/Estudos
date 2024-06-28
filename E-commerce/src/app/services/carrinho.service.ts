import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root',
})

export class CarrinhoService{

    itensNoCarrinho:any[]=[];
    sum: number=0;
    addcarrinho(item:any){
        
        return this.itensNoCarrinho.push(item)
        
    }
    mostrarcarrinho(){
        console.log(this.itensNoCarrinho)
        this.somaValores()
        return this.itensNoCarrinho;
    }
    somaValores():number{
        
        //for (let i=0; i>this.itensNoCarrinho.length; i++){
        //    this.sum+=this.itensNoCarrinho[i].valor;
        //}
        this.itensNoCarrinho.forEach(
            itensNoCarrinho => this.sum+=itensNoCarrinho.valor);
        console.log(this.sum)
        return this.sum
    }
}