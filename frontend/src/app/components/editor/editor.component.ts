import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { defultStyle } from '../../models/styleType';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  @Input()
  body!:String;
  
  @Input()
  readonly!: boolean;

  @Output() updateTextArea = new EventEmitter<String>();
  
  style!: string | {};

  constructor() { 
    this.readonly = false;
    this.style = defultStyle
  }

  ngOnInit(): void {
  }

  updateChanges(){
    this.updateTextArea.emit(this.body)

  }


}
