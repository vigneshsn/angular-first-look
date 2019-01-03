import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class UserService {

  constructor() { }

  getUserProfile() {
    return {
      "userName": "Hulk",
      "age": "30",
      "city": "Chennai"
    }
  }
}
