import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
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
  
        // A client-side or network error occurred. Handle it accordingly.
  
        console.error('An error occurred:', error.error.message);
      } else {
  
        // The backend returned an unsuccessful response code.
  
        // The response body may contain clues as to what went wrong.
  
        console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
      }
  
      // return an observable with a user-facing error message
  
      this.errorData = {
        errorTitle: 'Oops! Request for document failed',
        errorDesc: 'Something bad happened. Please try again later.'
      };
      return throwError(this.errorData);
    }
  
  
    PostMessage(input: Contact) {
    return this.http.post<Contact>(this.url, input, this.httpOptions).pipe(
      catchError(this.handleError)
    )
      }
  }
