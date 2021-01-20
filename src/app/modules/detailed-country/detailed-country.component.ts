import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import * as fromCountriesStore from "@rcc/shared/store/countries/index";
import * as _ from 'lodash-es';

@Component({
	selector: 'app-detailed-country',
	templateUrl: './detailed-country.component.html',
	styleUrls: ['./detailed-country.component.scss']
})
export class DetailedCountryComponent implements OnInit {
	selectedCountryData: any;
	getDetailedCountry$?: Observable<any>;
	getDetailedCountry: any;
	getAllCountries$?: Observable<any>;
	getAllCountries?: any[];
	isGetDetailedCountryTransacting$: Observable<boolean>;
	isGetDetailedCountryError$: Observable<boolean>;
	isGetDetailedCountrySuccess$: Observable<boolean>;
	alpha3Code: any;
	matchedRegions: any[] = [];

	constructor(
		private fromCountryStore: Store<fromCountriesStore.ICountriesState>,
	) {
		this.alpha3Code = localStorage.getItem('alpha3Code');
		this.selectors();
	}

	ngOnInit(): void {
		this.autoRun();
	}

	autoRun() {
		this.initialisers();
		this.listeners();
	}

	initialisers() { }

	listeners() {
		this.listenAllCountries();
		this.listenSelectedCountry();
	}

	listenSelectedCountry() {
		this.fromCountryStore.dispatch(new fromCountriesStore.GetDetailedCountry(this.alpha3Code));
		if(!this.selectedCountryData) {
			this.fromCountryStore.dispatch(new fromCountriesStore.GetCountries(''));
			this.getDetailedCountry$?.subscribe(selectedCountryData => {
				if(selectedCountryData.detailedCountry) {
					this.selectedCountryData = selectedCountryData.detailedCountry;
				}
			});
		}
	}

	listenAllCountries() {
		this.getAllCountries$?.subscribe(getAllCountries => {
			if(getAllCountries.countries.length != 0) {
				this.getAllCountries = getAllCountries.countries;
				this.filterRegion(this.alpha3Code);
			}
		});
	}

	selectors() {
		this.getDetailedCountry$ = this.fromCountryStore.select(fromCountriesStore.countrySelector);
		this.getAllCountries$ = this.fromCountryStore.select(fromCountriesStore.countrySelector);
		this.isGetDetailedCountryTransacting$ = this.fromCountryStore.select(fromCountriesStore.isGetDetailedCountryTransacting)
		this.isGetDetailedCountryError$ = this.fromCountryStore.select(fromCountriesStore.isGetDetailedCountryError);
		this.isGetDetailedCountrySuccess$ = this.fromCountryStore.select(fromCountriesStore.isGetDetailedCountrySuccess);
	}

	handleOnClickBorder(event: any) {
		this.matchedRegions = [];
		localStorage.setItem('alpha3Code', event.alpha3Code);
		this.filterRegion(event.alpha3Code);
	}

	filterRegion(code: any) {
		this.selectedCountryData = _.filter(this.getAllCountries, { alpha3Code: code }).pop();
		for (let i in this.selectedCountryData.borders) {
			let alpha3Code = this.selectedCountryData.borders[i];
			this.getAllCountries.map(result => {
				if(result.alpha3Code === alpha3Code) {
					this.matchedRegions.push(result)
				}
			})
		}
	}
}
