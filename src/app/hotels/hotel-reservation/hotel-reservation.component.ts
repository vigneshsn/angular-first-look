import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-hotel-reservation',
  templateUrl: './hotel-reservation.component.html',
  styleUrls: ['./hotel-reservation.component.scss']
})
export class HotelReservationComponent implements OnInit {

  hotelId: Number;
  discountCode: String = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .pipe(
      map(params => params["id"]),
      tap(id => (this.hotelId = +id))
    ).subscribe();
  }

  apply(code) {
    console.log('the discount is applied' + code);
    this.discountCode = code;
  }
}
