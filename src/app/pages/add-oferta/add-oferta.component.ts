import { Component, OnInit } from '@angular/core';
import { Oferta } from '../../models/oferta';
import { HttpService } from '../../services/http.service';
import { HttpOfertyService } from '../../services/http-oferty.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-add-oferta',
  templateUrl: './add-oferta.component.html',
  styleUrls: ['./add-oferta.component.css'],
})
export class AddOfertaComponent implements OnInit {
  model: Partial<Oferta> = {};
  categories: string[] = [];
  stans: string[] = [];

  constructor(private http: HttpService, private httpOfertyService: HttpOfertyService) {}

  ngOnInit(): void {
    this.http.getCategories().subscribe(categories => this.categories = categories);
    this.http.getStans().subscribe(stans => this.stans = stans);
  }

  send() {
    console.log(this.model);
    this.httpOfertyService.postOferta(this.model as Oferta).subscribe(
      result => console.log(result),
      error => console.error(error)
    )
  }

  printModel(title: NgModel) {
    console.log(title)
  }
}
