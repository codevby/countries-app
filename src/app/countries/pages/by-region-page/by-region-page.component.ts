import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { CommonModule } from '@angular/common';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [
    RouterLink,
    SearchBoxComponent,
    CountryTableComponent,
    CountryTableComponent,
    CommonModule
  ],
  templateUrl: './by-region-page.component.html',
})
export default class ByRegionPageComponent implements OnInit {


  public countries: Country[] = [];

  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  public selectedRegion?: Region;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
    this.countries =      this.countriesService.cacheStore.byRegion.countries;
  };

  searchByRegion( region: Region ):void {

    this.selectedRegion = region;

    this.countriesService.searchRegion( region )
      .subscribe( countries => {
        this.countries = countries;
      } );
  }

}
