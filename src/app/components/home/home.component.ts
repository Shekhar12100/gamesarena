import { Component, OnInit } from '@angular/core';
import { GamesService } from "./../../shared/games.service";
import { FilterPipe } from "./../../shared/filter.pipe";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public games:any = [];
  searchText = "";
  platform: string = 'platform';

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    this.getAllGames();
  }

  getAllGames() {
    this.gameService.getAllGames().subscribe(res => {
      this.games = res;
      // console.log(this.games);
    });
  }

  key:string = 'platform';
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

}
