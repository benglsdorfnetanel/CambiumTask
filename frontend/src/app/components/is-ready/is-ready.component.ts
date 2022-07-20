import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-is-ready',
  templateUrl: './is-ready.component.html',
  styleUrls: ['./is-ready.component.css']
})

export class IsReadyComponent implements OnInit, OnDestroy {

  response$!:Observable<any>;
  title!: String;
  body!: String;
  password!: String;
  isPassword!: String;
  display: Boolean = true;
  header: string = 'Enter Password';

  private subscriptions = new Subscription();

  constructor(private route: ActivatedRoute,private http: HttpService) { }


  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = String(routeParams.get('id'));
    this.subscriptions = this.http.getData(productIdFromRoute).subscribe(data => {
      this.title = data?.title;
      this.body = data?.body;
      if(data?.password) this.password = data?.password;
    });
  }

  itsPassword(){
    if(this.isPassword == this.password){
      this.display = false;
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
