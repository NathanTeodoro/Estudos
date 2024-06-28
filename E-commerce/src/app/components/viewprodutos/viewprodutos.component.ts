import { Component, OnChanges, OnInit, SimpleChanges, ChangeDetectionStrategy} from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-viewprodutos',
  templateUrl: './viewprodutos.component.html',
  styleUrls: ['./viewprodutos.component.scss']
})


export class ViewprodutosComponent implements OnInit{

  constructor(public CarrinhoService: CarrinhoService){}
  i!:number
  //itensNoCarrinho:any[]=[]
  mostrarCarrinho(){
    this.CarrinhoService.mostrarcarrinho();
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.CarrinhoService.somaValores()
  }
}

