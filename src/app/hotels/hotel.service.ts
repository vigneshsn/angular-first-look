import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'
import { CONFIG } from '../config'
import { map } from 'rxjs/operators';

let hotelServiceUrl = CONFIG.baseUrls.hotels;

export class Hotel {
  id: Number;
  name: String;
  location: String;
  img: String;
}

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }

  getHotels() {
    return this.http.get(hotelServiceUrl)
    .pipe(
      map( (data: any) => <Hotel[]>data.data)
    )
  }
}
