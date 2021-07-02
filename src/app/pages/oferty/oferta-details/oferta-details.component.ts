import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpService } from '../../../services/http.service';
import { Oferta } from '../../../models/oferta';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { HttpOfertyService } from '../../../services/http-oferty.service';

@Component({
  selector: 'app-oferta-details',
  templateUrl: './oferta-details.component.html',
  styleUrls: ['./oferta-details.component.css'],
})
export class OfertaDetailsComponent implements OnInit {
  ofertaDetails: Observable<Oferta>;

  constructor(
    private http: HttpService,
    private httpOfertyService: HttpOfertyService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.ofertaDetails = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.http.getOferta(params.get('id')))
    );
  }

  goToOferty() {
    this.router.navigate(['/oferty']);
  }
  
}
