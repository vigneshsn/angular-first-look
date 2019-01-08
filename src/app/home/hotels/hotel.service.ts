import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'
import { map } from 'rxjs/operators';
import { CONFIG } from 'src/app/config';

let hotelServiceUrl = CONFIG.baseUrls.hotels;

export class Hotel {
  id: Number;
  name: String;
  location: String;
  img: String;
}

@Injectable()
export class HotelService {

  constructor(private http: HttpClient) { }

  getHotels() {
    return this.http.get(hotelServiceUrl)
    .pipe(
      map( (data: any) => <Hotel[]>data.data)
    )
  }
}
