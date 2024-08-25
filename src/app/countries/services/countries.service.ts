import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiURL: string = 'https://restcountries.com/v3.1';

  public  cacheStore: CacheStore = {
    byCapital: { term:   '', countries: [] },
    byCountry: { term:   '', countries: [] },
    byRegion:  { region: '', countries: [] },
  };

  constructor(private http: HttpClient) { }

  searchCountryByAlphaCode( code: string ):Observable<Country | null> {

    return this.http.get<Country[]>(`${ this.apiURL }/alpha/${ code }`)
      .pipe(
        map( countries => countries.length > 0 ? countries[0]: null ),
        catchError( () => of(null) )
      );
  }


  searchCapital( term: string ):Observable<Country[]> {

     return this.http.get<Country[]>(`${ this.apiURL }/capital/${ term }`)
      .pipe(
        tap( countries => this.cacheStore.byCapital = { term, countries } ) // term: term, countries: countries ---> es redundante
      );

  }

  searchCountry( term: string ):Observable<Country[]> {

    return this.http.get<Country[]>(`${ this.apiURL }/name/${ term }`)
     .pipe(
      tap( countries => this.cacheStore.byCountry = { term, countries } )
     );

 }

 searchRegion( region: Region ):Observable<Country[]> {

  return this.http.get<Country[]>(`${ this.apiURL }/region/${ region }`)
   .pipe(
    tap( countries => this.cacheStore.byRegion = { region, countries } )
   );

}

}
