import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { transition } from '@angular/animations';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [MatMenuModule,MatIconModule,MatButtonModule,MatDividerModule]
})
export class HeaderComponent {
  isShow = false;
 
    toggleDisplay() {
      this.isShow = !this.isShow;
  }
  }
