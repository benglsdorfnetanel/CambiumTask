import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Subscription, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService implements OnDestroy {

  private url!:string;

  private subscriptions = new Subscription();

  constructor(private http: HttpClient) {
    this.url = "http://localhost:3000/copypaste";
   }

  sendText(text:String){
    this.subscriptions = this.http.post(this.url,{text}).subscribe();
  }
  
  getText(): Promise<Object>{
    return new Promise((resolve,reject) => {
      this.subscriptions = this.http.get(this.url).pipe(take(1)).subscribe(data => {
        console.log("data",data);
        resolve(data);
      });
    })
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }
}
