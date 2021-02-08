import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getUserDetails(userName: string){
    return this.http.get(`https://api.github.com/users/${userName}`);
  };

  getRepo(repoUrl: string){
    return this.http.get(repoUrl)
  }
};
