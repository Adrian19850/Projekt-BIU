import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { Oferta } from '../../models/oferta';

@Component({
  selector: 'app-oferty',
  templateUrl: './oferty.component.html',
  styleUrls: ['./oferty.component.css'],
})
export class OfertyComponent implements OnInit {
  oferty: Observable<Oferta[]>;
  constructor(private http: HttpService) {}

  ngOnInit() {
    this.oferty = this.http.getOferty();
  }
}
