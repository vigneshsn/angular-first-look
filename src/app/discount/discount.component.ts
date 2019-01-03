import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {

  @Input() assetId: any; //could be flight or hotel
  @Output() apply = new EventEmitter<String>();
  reservationCode: String;


  constructor() { }

  ngOnInit() {
    console.log('reservationId', this.assetId);
  }

  applyCode() {
    this.apply.emit(this.reservationCode);
  }

}
