import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
//import {CopypasteModel} from '../../models/copypaste';

@Component({
  selector: 'app-is-ready',
  templateUrl: './is-ready.component.html',
  styleUrls: ['./is-ready.component.css']
})
export class IsReadyComponent implements OnInit {

  response$!:Observable<any>;
  title!: String;
  body!: String;
  password!: String;
  isPassword!: String;
  display: Boolean = true;
  header: string = 'Enter Password';
  constructor(private route: ActivatedRoute,private router: Router,private http: HttpService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = String(routeParams.get('id'));
    const object = this.http.getData(productIdFromRoute);
    object.subscribe(data => {
      this.title = data?.title;
      this.body = data?.body;
      if(data?.password) this.password = data?.password;
    })
  }

  itsPassword(){
    if(this.isPassword == this.password){
      this.display = false;
    }
  }

}
