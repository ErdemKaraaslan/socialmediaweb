import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginRequestModel} from "../models/login-request.model";
import {UserResponseModel} from "../models/user-response.model";
import {UserRequestModel} from "../models/user-request.model";

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  baseURL = 'http://localhost:8080/users';


//ToDo: string döndüğü zaman ne yapmak lazım araştırılacak.
  login(dto: LoginRequestModel): Observable<UserResponseModel> {
    return this.http.post<UserResponseModel>(this.baseURL.concat('/login'), dto);
  }

  getUserFollowers(userId: number): Observable<UserResponseModel[]> {
    return this.http.get<UserResponseModel[]>(this.baseURL.concat('/followersV2/', userId.toString()));
  }

  getUserFollowings(userId: number): Observable<UserResponseModel[]> {
    return this.http.get<UserResponseModel[]>(this.baseURL.concat('/followingsV2/', userId.toString()));
  }

  getCurrentUser(): UserResponseModel {
    return JSON.parse(localStorage.getItem('currentUser')!) as UserResponseModel;
  }

  updateUser(userNewInfos: UserRequestModel): Observable<UserResponseModel> {
    return this.http.put<UserResponseModel>(this.baseURL.concat('/edit'), userNewInfos );
  }

  getAllUsers(): Observable<UserResponseModel[]> {
    return this.http.get<UserResponseModel[]>(this.baseURL);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }
}
