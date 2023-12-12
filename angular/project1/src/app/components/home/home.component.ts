import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  clientes = [
    {
      nome:"Nathan",
      idade:27,
      sexo:"M",
      salario:1000
    },
    {
      nome:"Esther",
      idade:22,
      sexo:"F",
      salario:1000
    },
    {
      nome:"Zinêa",
      idade:67,
      sexo:"F",
      salario:1200
    },
    {
      nome:"Betânia",
      idade:39,
      sexo:"F",
      salario:1200
    }
  ]
  
}
