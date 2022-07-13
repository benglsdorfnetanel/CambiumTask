import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  loadText!:Promise<Object>;

  constructor(private httpService: HttpService) {}

  updataText(){
    const text = this.httpService.getText();
    this.loadText = text;
  }
}
