import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { MessageService } from '../services/message.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private messageService: MessageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if(!environment.production) {
          console.log(err);
        }
        
        let errorMessage = '';

        if(err.error instanceof ErrorEvent) {
          errorMessage = `Error: ${err.error.message}`;
        } else if (Array.isArray(err.error) && err.error.length > 0) {
          errorMessage = `Error: ${err.error[0].message}`;
        } else if(err.error.errors) {
          errorMessage = `Error: ${err.error.errors[0].message}`;
        }else {
          errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
        }

        this.messageService.addMessage(errorMessage);
        return throwError(() => new Error(''));
      })
    );
  }
}
