import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [
    RouterLink,
    SearchBoxComponent,
    CountryTableComponent,
    CountryTableComponent
  ],
  templateUrl: './by-region-page.component.html',
})
export default class ByRegionPageComponent {


  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {};

  searchByRegion( term: string ):void {
    this.countriesService.searchRegion( term )
      .subscribe( countries => {
        this.countries = countries;
      } );
  }

}
