import { AfterContentInit, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterViewInit , AfterContentInit{
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
  title = 'project1';
  newText = ''
  constructor(){
    console.log('componente construido')

  }
  
  //abaixo temos os life cicles dos componetes angular

  ngOnChanges(changes: SimpleChanges): void {
   console.log("OnChanges")
    
  }

  ngOnInit(): void {
    console.log('OnInit')
    this.title = "new title"
  }

  ngDoCheck(): void {
  console.log('DoCheck')  
  }
  mudarTexto(){
     this.newText += 'HELLO WORD '
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit')
  }
  ngOnDestroy(): void {
    console.log('NgONDestroy')
  }
  ngAfterContentInit(): void {
    console.log('')
  }
  imgUrl = "https://www.crosssoft.de/wp-content/uploads/2019/03/Angular_full_color_logo.svg-e1551712341736.png"
  
  callFUnction(){
    this.imgUrl = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F236x%2Fe4%2F7f%2Fa4%2Fe47fa4eb123ce9f7ceb819674d8b4dc2--gay-html.jpg&f=1&nofb=1&ipt=185c3cb4276a98c9433c54e9d7805bbe201dcb78623abc63e8715e4bebd16bf7&ipo=images' 
  }

  newText2 = ""
  // os $ tipos de data binding
  // interpolação como fizemos no title e new title

  // Propiety bind <img [src] = "imgUrl">

  // Event binding <button (click) = "callFunction()">

  // two-way data biding <input [{ngModel}] = "newText2">
 ce(newText2:String) {
  if (newText2 == "Bolsonaro gay") {
    alert("fase concluida")
  }}
 
  //ngIf
  fase:string = ''
  mensagempadrao:string = 'mensagem padrão'

  
//ngSwitch analisa se a variavel condiz com a condição 
// se newtext3 for true  = texto true
//             for false  = texto false
//             for null   = texto default

newText3 = ''
}
