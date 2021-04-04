import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private apiUrl = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json";


  constructor(private http : HttpClient) { }

  getAllGames() {
    return this.http.get<any>(this.apiUrl);
  }
}
