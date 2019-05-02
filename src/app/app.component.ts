import { Component } from '@angular/core';
import { FavoriteChangeEventArgs } from './favorite/favorite.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewMode= 'map';

  courses = [1,2,3,4,5];

  tweet = {
    body: 'Some content here ...',
    likesCount: 10,
    //isLiked: true
  }

  title1 = 'angularngFor';
  post = {
    title: "Title",
    isFavorite: true
  }
  onFavoriteChange(eventArgs: FavoriteChangeEventArgs) {
    console.log("On Favorite Changed !",  eventArgs);
  }

}
