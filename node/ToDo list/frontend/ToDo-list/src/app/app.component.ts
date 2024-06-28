import { Component } from '@angular/core';
//import {MatIconModule} from '@angular/material/icon';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { NgModel } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'ToDo-list';
  readonly APIURL="http://localhost:5038/api/todolist/";
  id: any;
  note: any;
  notee:any;
  noteid: any;
  name:any;

  constructor(private http:HttpClient){
  }
  notes:any=[];
  
  refreshNotes(){
    this.http.get(this.APIURL+"getnotes").subscribe(data=>{
      this.notes=data;
      })
    }
    
  
  
  ngOnInit() {
    this.refreshNotes()
  }

 async addNotes(){
    var note = (<HTMLInputElement>document.getElementById("newNotes")).value
    var newHour = (<HTMLInputElement>document.getElementById("newHour")).value
    var newDate = (<HTMLInputElement>document.getElementById("newDate")).value
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    var newNotes = {"newNote" : note}
    this.http.post(`${this.APIURL}addnotes`,newNotes)
      .subscribe(response => console.log(response)) 

  setTimeout(()=>{this.refreshNotes()}, 1000 )
         
  }

  async delNotes(note:any){
    var id = note._id
    this.http.delete(`${this.APIURL}del?id=`+id,id)
      .subscribe(response => console.log(response)) 
      setTimeout(()=>{this.refreshNotes()}, 1000 )
  }

  async editNotes(note:any, noteid:any){

    var id = (<HTMLInputElement>document.getElementById(note._id)).id
    var noteed = (<HTMLInputElement>document.getElementById(note._id)).value

    //console.log(notee)    
    var id = id
    var edit = noteed

    var editNote = {
      _id: id,
      editNote :noteed
    }
    const e = {
      "edit":editNote
    }
    await this.http.put(`${this.APIURL}edit`,e)
      .subscribe(response=>console.log(response))
    

    setTimeout(()=>{this.toggleDisplay(note)}, 50 )
    setTimeout(()=>{this.refreshNotes()}, 1000 )
    
  }isShow = true;
 
  toggleDisplay(note:any) {
   this.isShow = !this.isShow
}
public isLightTheme = true;

  onThemeSwitchChange() {

    this.isLightTheme = !this.isLightTheme;

    document.body.setAttribute(
      'data-theme',
      this.isLightTheme ? 'light' : 'dark'
    );
  }
}