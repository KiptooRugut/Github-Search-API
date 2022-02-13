import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../users/user';
import { Repository } from '../repository/repository';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchGithubService {

  user: User;
  repository: Repository;
  repositoryData:any = [];
  newUserData: any = [];

  constructor(private http: HttpClient) { 
    this.user = new User(0, "", "", new Date, true, "");
    this.repository = new Repository("", "", new Date, "", "", "", new Date)
  }

  getData(username: string) {

    this.repositoryData.length = 0;

    interface ApiResponse {
      public_repos: number,
      login: string,
      avatar_url: string,
      created_at: Date,
      html_url: string,
      hireable: boolean
    }
  } 
}
