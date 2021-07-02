import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Oferta } from '../models/oferta';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpOfertyService {
  private url = 'http://localhost:3000/oferty';

  constructor(private http: HttpClient) {}

  getOferty(): Observable<Oferta[]> {
    return this.http.get<Oferta[]>(this.url).pipe(tap(console.log));
  }

  postOferta(oferta: Oferta): Observable<Oferta> {
    return this.http.post<Oferta>(this.url, oferta).pipe(tap(console.log));
  }

  putOferta(oferta: Oferta): Observable<Oferta> {
    return this.http
      .put<Oferta>(this.url + '/' + oferta.id, oferta)
      .pipe(tap(console.log));
  }

  patchOferta(oferta: Partial<Oferta>): Observable<Oferta> {
    return this.http
      .patch<Oferta>(this.url + '/' + oferta.id, oferta)
      .pipe(tap(console.log));
  }

  deleteOferta(id: string): Observable<{}> {
    return this.http.delete<{}>(this.url + '/' + id).pipe(tap(console.log));
  }

  makeError(): Observable<HttpErrorResponse> {
    return this.http
      .delete(this.url + '/' + 999)
      .pipe(tap(console.log), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error(
      `Name: ${error.name} \n` +
        `Message: ${error.message} \n` +
        `Returned code: ${error.status} \n`
    );
    return throwError('Something bad happened; please try again later.');
  }

  headers(): Observable<HttpResponse<Oferta[]>> {
    const myHeaders = new HttpHeaders({
      Authorizations: 'my_token',
      'Content-Type': 'application/json',
      'X-Custom-Header': 'Projekt BIU',
    });
    return this.http
      .get<Oferta[]>(this.url, { observe: 'response', headers: myHeaders })
      .pipe(
        tap((res: HttpResponse<Oferta[]>) => {
          console.log(res.headers.keys());
          console.log(res.headers.get('Cache-Control'));
          console.log(res.headers.get('Content-Type'));
          console.log(res.headers.get('Expires'));
          console.log(res.headers.get('Pragma'));
        })
      );
  }

  params(): Observable<Oferta> {
    const myParams = new HttpParams()
      .set('_sort', 'title')
      .set('_order', 'desc');
    return this.http
      .get<Oferta[]>(this.url, { params: myParams })
      .pipe(tap(console.log));
  }
}
