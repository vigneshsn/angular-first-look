import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-deals-detail',
  templateUrl: './deals-detail.component.html',
  styleUrls: ['./deals-detail.component.scss']
})
export class DealsDetailComponent implements OnInit {
  private id: Number;

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {

    this.route.params.pipe(
      map(params => params["id"]),
      tap(id => (this.id = +id))
    )
    .subscribe(id => console.log('selected id '+ id))
  }

}
