import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title1 = 'angularngFor';
  post = {
    title: "Title",
    isFavorite: true
  }
  onFavoriteChange() {
    console.log("On Favorite Changed !");
  }
}
