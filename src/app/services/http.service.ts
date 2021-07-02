import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Oferta } from '../models/oferta';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  getOferty(): Observable<Oferta[]> {
    return this.httpClient.get<Oferta[]>('http://localhost:3000/oferty');
  }

  getOferta(id: string): Observable<Oferta> {
    return this.httpClient.get<Oferta>('http://localhost:3000/oferty/' + id);
  }

  getCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>('http://localhost:3000/categories');
  }

  getOfertyFromCategory(category: string): Observable<Oferta[]> {
    return this.getOferty().pipe(
      map(oferty => oferty.filter(oferta => oferta.category === category))
    );
  }


  getStans(): Observable<string[]> {
    return this.httpClient.get<string[]>('http://localhost:3000/stans');
  }

getOfertyFromStan(stan: string): Observable<Oferta[]> {
    return this.getOferty().pipe(
      map(oferty => oferty.filter(oferta => oferta.stan === stan))
    );
  }

  getChosens(): Observable<string[]> {
    return this.httpClient.get<string[]>('http://localhost:3000/chosens');
  }
  getOfertyFromChosens(chosen: string): Observable<Oferta[]> {
    return this.getOferty().pipe(
      map(oferty => oferty.filter(oferta => oferta.chosen === chosen))
    );
  }

}
