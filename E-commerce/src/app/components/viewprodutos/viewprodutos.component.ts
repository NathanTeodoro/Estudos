import { Component, OnChanges, OnInit, SimpleChanges, ChangeDetectionStrategy} from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-viewprodutos',
  templateUrl: './viewprodutos.component.html',
  styleUrls: ['./viewprodutos.component.scss']
})


export class ViewprodutosComponent {

  constructor(public CarrinhoService: CarrinhoService){}
  i!:number
  //itensNoCarrinho:any[]=[]
  mostrarCarrinho(){
    this.CarrinhoService.mostrarcarrinho()
    
}
}
