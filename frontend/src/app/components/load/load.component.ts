import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { HttpService }from '../../services/http.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent {

  @Input() text!:any;


  constructor() { 
  }


}
