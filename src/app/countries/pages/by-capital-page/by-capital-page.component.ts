import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountryTableComponent } from "../../components/country-table/country-table.component";

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [
    RouterLink,
    SearchBoxComponent,
    CountryTableComponent,
    CountryTableComponent
],
  templateUrl: './by-capital-page.component.html',
})
export default class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {};

  searchByCapital( term: string ):void {
    this.countriesService.searchCapital( term )
      .subscribe( countries => {
        this.countries = countries;
      } );
  }

}
