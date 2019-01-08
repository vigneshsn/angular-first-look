import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserService } from 'src/app/shared/user.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public user: User;
  constructor(private userService: UserService, 
    private authService: AuthService, private router : Router) { }

  ngOnInit() {
    this.user = this.userService.getUserProfile()
  }
}
