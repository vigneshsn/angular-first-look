import { Component, OnInit } from '@angular/core';
//import { UserService } from '../shared/user.service';
import { DealService, Deals } from './deal-service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit {

  deals: Observable<Deals[]>;

  constructor(private dealService : DealService) {
    this.deals = dealService.getDeals();
  }

  ngOnInit() {
  }


}
