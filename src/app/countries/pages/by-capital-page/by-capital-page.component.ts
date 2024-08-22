import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountryTableComponent } from "../../components/country-table/country-table.component";

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { LoadingSpinerComponent } from '../../../shared/components/loading-spiner/loading-spiner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [
    CommonModule,
    CountryTableComponent,
    CountryTableComponent,
    LoadingSpinerComponent,
    RouterLink,
    SearchBoxComponent,
],
  templateUrl: './by-capital-page.component.html',
})
export default class ByCapitalPageComponent {

  public countries: Country[] = [];
  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService) {};

  searchByCapital( term: string ):void {

    this.isLoading = true;

    this.countriesService.searchCapital( term )
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      } );
  }

}
