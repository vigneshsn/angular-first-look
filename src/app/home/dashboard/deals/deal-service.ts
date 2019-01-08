import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'
import { map } from 'rxjs/operators';
import { CONFIG } from 'src/app/config';

let dealsServiceUrl = CONFIG.baseUrls.deals;

export class Deals {
  id: Number;
  desc: String;
  code: String;
  img: String;
}

@Injectable({
  providedIn: 'root'
})
export class DealService {

  constructor(private http: HttpClient) { }

  getDeals() {
    return this.http.get(dealsServiceUrl)
    .pipe(
      map( (data: any) => <Deals[]>data.data)
    )
  }
}
