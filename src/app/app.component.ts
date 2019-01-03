import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'reservation-app';
  userName: String;

  constructor(private userService: UserService){}

  ngOnInit() {
    this.userName = this.userService.getUserProfile().userName;
  }

}
