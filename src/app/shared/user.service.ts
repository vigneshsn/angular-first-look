import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

export class User {
  id: String;
  userName: String;
  age: Number;
  city: String;
}

@Injectable()
export class UserService {

  constructor() { }

  getUserProfile(): User {
    //todo make service call
    return {
      "id": "1234",
      "userName": "Hulk",
      "age": 30,
      "city": "Chennai"
    }

  }
}
