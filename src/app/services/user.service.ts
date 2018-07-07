import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  result:any;

  constructor(private _http:Http) { }
  
  saveUserInfo(userModel:any) {
    return this._http.post("http://localhost:3000/users/userData",userModel).map(res => res.json()).toPromise();
  }

  getUserInfo(guid:string){
    return this._http.get("http://localhost:3000/users/userData?guid="+guid).map(res=>res.json()).toPromise();
  }

}
