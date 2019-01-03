import { Component, OnInit } from '@angular/core';
import { Hotel, HotelService } from './hotel.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {
  hotels: Observable<Hotel[]>;

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.hotels = this.hotelService.getHotels();
  }

}
