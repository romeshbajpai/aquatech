import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterceptorsService {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const authToken = this.currentuser.authToken
    var authrequest = req.clone({
     setHeaders:{
       Authorization : `Bearer ${authrequest}`
     }
    })
    return next.handle(authrequest)
   }

}
