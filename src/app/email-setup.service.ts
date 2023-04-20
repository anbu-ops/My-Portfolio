import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
  export class EmailSetupService {
    private url = "https://mailthis.to/AnkBan";
    // PostMessage: any;
    constructor(private http: HttpClient){}
  
    PostMessage(input: any) {
    return this.http.post(this.url, input)
      }
  }
