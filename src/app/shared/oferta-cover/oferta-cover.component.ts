import { Component, Input } from '@angular/core';
import { Oferta } from '../../models/oferta';

@Component({
  selector: 'app-oferta-cover',
  templateUrl: './oferta-cover.component.html',
  styleUrls: ['./oferta-cover.component.css'],
})
export class OfertaCoverComponent {
  @Input() oferta: Oferta;
}
