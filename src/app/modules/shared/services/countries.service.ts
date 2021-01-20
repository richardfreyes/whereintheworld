import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  	providedIn: 'root'
})
export class CountriesService {

	constructor(
		private http: HttpClient
	) { }

	apiGetCountries(data: any) {
		return this.http.get(`https://restcountries.eu/rest/v2/all`);
	}

	apiGetDetailedCountry(data: any) {
		return this.http.get(`https://restcountries.eu/rest/v2/alpha/${data}`);
	}
}
