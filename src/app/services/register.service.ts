import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginRequestModel} from "../models/login-request.model";
import {UserResponseModel} from "../models/user-response.model";
import {UserRequestModel} from "../models/user-request.model";
import {RegisterRequestModel} from "../models/register-request.model";

@Injectable({
  providedIn: 'root',
})
export class RegisterService {

  constructor(private http: HttpClient) {
  }

  baseURL = 'http://localhost:8080/users/';

  register(dto: RegisterRequestModel): Observable<any> {
    console.log("servisteki register metoduna girdi");
    return this.http.post<any>(this.baseURL.concat('register'), dto);
  }

}
