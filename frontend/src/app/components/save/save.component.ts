import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent {

  text!:String;
  constructor(private httpService: HttpService) { }

  onChangeText(){
    this.httpService.sendText(this.text);
  }

}
