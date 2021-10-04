import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import { UserData } from './userData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userData = new BehaviorSubject(0);
  constructor(public _HttpClient: HttpClient) { }
  signUp(data:any):Observable<any>{

   return this._HttpClient.post('https://routeegypt.herokuapp.com/signup', data);
  }

  signin(data:any):Observable<any>{
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signin', data);
  }

  saveUserData(data:any,token:any){
    let user:any = new UserData(data.first_name,data.last_name,data.email,token);
this.userData.next(user);

  }
}
