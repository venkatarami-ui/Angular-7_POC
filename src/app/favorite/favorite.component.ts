import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  isFavorite: boolean;

  constructor() { }

  ngOnInit() {
  }

  onCLick() {
    this.isFavorite = !this.isFavorite;
  }

}
