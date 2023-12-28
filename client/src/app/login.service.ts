import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
constructor(private _http:HttpClient){}


Login(userdata:object){
let BASE_URL=""
return this._http.post(BASE_URL,userdata)
}


Userprofile(userdata:object){
  let BASE_URL=""
  return this._http.get(BASE_URL,userdata)
  }


  
}
