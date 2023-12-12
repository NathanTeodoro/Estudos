import { Component, Input } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
  
})
export class ViewProductComponent {
@Input() nome : any = ''
constructor(){}
ngOnInit(): void {
}

}
