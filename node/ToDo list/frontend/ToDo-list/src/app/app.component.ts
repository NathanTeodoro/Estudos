import { Component } from '@angular/core';

import { HttpClient } from "@angular/common/http"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDo-list';
  readonly APIURL="http://localhost:5038/api/todolist/";
  
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
    var newNotes = (<HTMLInputElement>document.getElementById("newNotes")).value
    var newHour = (<HTMLInputElement>document.getElementById("newHour")).value
    var newDate = (<HTMLInputElement>document.getElementById("newDate")).value
    var formData = new FormData();
    var obj:any
    obj= newNotes
    formData.append("newNotes", newNotes);
    await this.http.post(this.APIURL+"addnotes",formData).subscribe(data=>{
      alert(data)
      this.refreshNotes()
    })
    return newNotes
  }
}
