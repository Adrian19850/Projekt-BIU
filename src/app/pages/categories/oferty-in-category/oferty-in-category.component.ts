import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpService } from '../../../services/http.service';
import { Oferta } from '../../../models/oferta';

@Component({
  selector: 'app-oferty-in-category',
  templateUrl: './oferty-in-category.component.html',
  styleUrls: ['./oferty-in-category.component.css'],
})
export class OfertyInCategoryComponent implements OnInit {
  oferty: Observable<Oferta[]>;

  constructor(private http: HttpService, private route: ActivatedRoute) {}

  ngOnInit() {
    const category = this.route.snapshot.paramMap.get('category');
    this.oferty = this.http.getOfertyFromCategory(category);
    this.oferty = this.route.paramMap.pipe(switchMap((params: ParamMap) => this.http.getOfertyFromCategory(params.get('category'))
    )
    );

  }
}
