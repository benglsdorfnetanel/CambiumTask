import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  private url!:string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:3000/copypaste";
   }

  sendSubmit(text:{}):Observable<any>{
    return this.http.post(this.url,text);
  }
  
  getData(id:string): Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }
}
