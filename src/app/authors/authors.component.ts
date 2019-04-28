import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {


  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
    this.familyMembers = service.getfamilyMembers();
  }
  titleImage = ' Tetsing App ';
  // tslint:disable-next-line: max-line-length
  imageUrl = 'https://ej2.syncfusion.com/products/typescript/avatar/avatarimg/pic.png';
  colSpan = 2;

  authors: string[];
  familyMembers: string[];
  isActive = true;
  address;
  name: string = '';
  email = 'me@sample.com';
  setValue(){
    this.name = 'Sujith';
  }
  onKeyUpBind() {
    console.log(this.email);
  }

  onSave($event) {
    $event.stopPrperagation();
    console.log('Click Button function called here', $event);
  }
  onDivClick($event) {
    console.log('Div Clicked', $event);
  }
  sectionClick($event) {
    console.log('Section Clicked', $event);
  }
  onKeyUp() {
      console.log("Key Enter here");
    // if ($event.keyCode === 13 )  console.log("Enter Key Pressed");  // other way using $event
  }
  onKeyUpNew(address){
    console.log(this.address);
  }

  ngOnInit() {
  }

}
