import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FollowRequestModel} from "../models/follow-request.model";
import {FollowRequestResponseModel} from "../models/follow-request-response.model";

@Injectable({
  providedIn: 'root',
})
export class FollowService {

  constructor(private http: HttpClient) {
  }

  baseURL = 'http://localhost:8080/follows';

  saveFollow(followRequest: FollowRequestModel): Observable<any> {
    return this.http.post<any>(this.baseURL, followRequest);
  }


  cancelFollow(loggedInUserId: number, visitedUserId: number): Observable<any> {
    return this.http.delete<any>(this.baseURL.concat('/delete/').concat(loggedInUserId.toString()).concat('/').concat(visitedUserId.toString()));
  }
}
