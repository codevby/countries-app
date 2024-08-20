import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [
    RouterLink,
    SearchBoxComponent,
    CountryTableComponent,
    CountryTableComponent
  ],
  templateUrl: './by-country-page.component.html',
})
export default class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {};

  searchByCountry( term: string ):void {
    this.countriesService.searchCountry( term )
      .subscribe( countries => {
        this.countries = countries;
      } );
  }

}
