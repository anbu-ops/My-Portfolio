import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Contact } from './contact';
import { catchError, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
  export class EmailSetupService {
    errorData!: {};
    httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    private url = "https://mailthis.to/AnkBan";
    // PostMessage: any;
    constructor(private http: HttpClient){}

    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        console.error('An error occurred:', error.error.message);
      }
      return throwError(this.errorData);
    }
    PostMessage(input: Contact) {
    return this.http.post<Contact>(this.url, input, this.httpOptions).pipe(
      catchError(this.handleError)
    )
      }
  }
