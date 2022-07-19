import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent {

  title!:String;
  textarea!: String;
  password!: String;
  display!: Boolean;
  respones!:any;
  dialogString!:string;


  constructor(private httpService: HttpService) { }

  onSubmit(){
    this.httpService.sendSubmit({title : this.title, body: this.textarea, password: this.password}).subscribe(data => {
      this.dialogString = `Hi Cambium, you paste is ready in: http://localhost:4200/copypaste/${data?.id}`;
    })
    this.display = true;
  }

}
