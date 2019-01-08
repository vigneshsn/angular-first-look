import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated() {
    if(sessionStorage.getItem("userData") && sessionStorage.getItem("userData").length > 0) {
        return true;
    }
    return false;
  }

  async login(loginData) {
    //todo make api calls
    let response = {"token": "2323233234"};
    await sessionStorage.setItem("userData", JSON.stringify(response));
    return true;
  }

  async logout() {
    await sessionStorage.removeItem("userData");
    sessionStorage.clear();
  }
}
