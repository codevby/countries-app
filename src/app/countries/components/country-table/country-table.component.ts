import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'countries-table',
  standalone: true,
  imports: [
    NgIf,
    RouterModule,
  ],
  templateUrl: './country-table.component.html',
  styles: [
    `img {
      width: 35px;
    }`
  ]
})
export class CountryTableComponent {

  @Input()
public countries: Country[] = [];

}
