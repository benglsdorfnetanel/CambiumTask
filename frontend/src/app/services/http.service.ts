import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subscription, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService implements OnDestroy {

  private url!:string;

  private subscriptions = new Subscription();

  constructor(private http: HttpClient) {
    this.url = "http://localhost:3000/copypaste";
   }

  sendSubmit(text:{}):Observable<any>{
    return this.http.post(this.url,text);
  }
  
  getData(id:string): Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }
}
