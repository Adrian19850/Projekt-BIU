import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-chosen-oferty',
  templateUrl: './chosen-oferty.component.html',
  styleUrls: ['./chosen-oferty.component.css']
})
export class ChosenOfertyComponent implements OnInit {
  chosens:Observable<string[]>;
  constructor(private http: HttpService) { }
  ngOnInit(): void {
    this.chosens = this.http.getChosens();
  }
  }
