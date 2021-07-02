import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Oferta } from '../../../models/oferta';
import { HttpService } from '../../../services/http.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-oferty-in-chosen',
  templateUrl: './oferty-in-chosen.component.html',
  styleUrls: ['./oferty-in-chosen.component.css']
})
export class OfertyInChosenComponent implements OnInit {
  oferty: Observable<Oferta[]>
  constructor(private http: HttpService, private route: ActivatedRoute) { }

  ngOnInit(): void {
 this.oferty = this.route.paramMap.pipe(switchMap((params: ParamMap) => this.http.getOfertyFromChosens(params.get('chosen'))
      )
    );
  }

}
