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
// Custom Pipes are here

// tslint:disable-next-line: max-line-length
text = `Pipes Transforms a number to a currency string, formatted according to locale rules that determine group sizing and separator, decimal-point character, and other locale-specific configurations.`;


  titleImage = ' Tetsing App ';
  // tslint:disable-next-line: max-line-length
  imageUrl = 'https://ej2.syncfusion.com/products/typescript/avatar/avatarimg/pic.png';
  colSpan = 2;

  authors: string[];
  familyMembers: string[];
  isActive = true;
  address;
  name = '';
  email = 'me@sample.com';

  courses = {
    title: 'Angular Pipes started here',
    Rating: 4.9745,
    Student: 30123,
    price: 190.95,
    releseDate: new Date (2012, 3, 12)
  }
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
