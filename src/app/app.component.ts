import { Component } from '@angular/core';
import { FavoriteChangeEventArgs } from './favorite/favorite.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataList = [
    {
      'FirstName' : 'Roy',
      'LastName'  : 'Agasthyan'
    },
    {
      'FirstName' : 'Sam',
      'LastName'  : 'Johnson'
    },
    {
      'FirstName' : 'Anjali',
      'LastName'  : 'Sharma'
    },
    {
      'FirstName' : 'Julia',
      'LastName'  : 'Sherwood'
    }
  ]
onAdd() {
  this.dataList.push({
    'FirstName' : 'Venkata Rami',
    'LastName'  : 'Reddy'
  });
}

products;

LoadProducts() {
  this.products = [
    {id: 1, name:'products 1', duration: '1 year' },
    {id: 2, name:'projects 2', duration: '3 year' },
    {id: 3, name:'products 3', duration: '5 year' },
    {id: 4, name:'products 4', duration: '2 year' },
    {id: 5, name:'products 5', duration: '4 year' },
    {id: 6, name:'products 6', duration: '10 year' },
  ];
}

takeProducts (index, product) {
  return product ? product.id : undefined;
}

onRemove(item) {
  let index = this.dataList.indexOf(item);
  this.dataList.splice(index, 1);
}

onChange(projectes) {
  projectes.name = "Updated"
}

  projectes = [
    {id: 1, name:'projects 1', duration: '1 year' },
    {id: 2, name:'projects 2', duration: '3 year' },
    {id: 3, name:'projects 3', duration: '5 year' },
    {id: 4, name:'projects 4', duration: '2 year' },
    {id: 5, name:'projects 5', duration: '4 year' },
    {id: 6, name:'projects 6', duration: '10 year' },
  ]

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
