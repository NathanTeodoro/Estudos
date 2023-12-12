import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
//import { NovoComponent } from './components/novo/novo.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
 // {path:'novo', component: NovoComponent},
  {path:'produto', loadChildren:() => import("./features/produto/produto.module").then(m=>m.ProdutoModule) } // lazyloads
  // definimos o caminho importamos o modulo ai então renderizamos o modulo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
