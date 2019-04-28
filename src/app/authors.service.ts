import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  getAuthors() {
    return ['Author1', 'Author2', 'Author3', 'Author4'];
  }
  getfamilyMembers() {
    return ['B.V Sujith Reddy', 'B.V Dheekshith Reddy', 'B Suvarchala', 'B Venkata Rami Reddy'];
  }
}
