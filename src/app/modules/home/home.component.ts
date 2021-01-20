import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import { ObservablesService } from '@rcc/shared/services/observables.service';
import * as fromCountryStore from "@rcc/shared/store/countries/index";

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	countriesListData: any[] = [];
	getCountriesData$?: Observable<any>;
	getCountriesData?: any[];
	isGetCountriesTransacting$: Observable<boolean>;
	isGetCountriesError$: Observable<boolean>;
	isGetCountriesSuccess$: Observable<boolean>;
	detailsData: any;
	searchText: string = '';
	filterRegion: string = '';
	regionOptions: any;
	limit: any = 12;

	constructor(
		private fromCountryStore: Store<fromCountryStore.ICountriesState>,
		private observableData: ObservablesService,
		private route: Router
	) {
		this.selectors();
	}

	ngOnInit(): void {
		this.autoRun();
	}

	autoRun() {
		this.initialisers();
		this.listeners();
	}

	initialisers() {
		this.initCountries();
	}

	listeners() {
		this.listenOnSelectors();
	}

	initCountries() {
		this.fromCountryStore.dispatch(new fromCountryStore.GetCountries(''));
	}

	initFilterRegion(data: any) {
		let uniq: any = {};
		this.regionOptions = data.filter((obj: any) => !uniq[obj.region] && (uniq[obj.region] = true) && obj.region !== "");
	}

	listenOnSelectors() {
		this.getCountriesData$?.subscribe(getCountry => {
			if(getCountry.countries.length !== 0) {
				this.countriesListData = getCountry.countries;
				this.initFilterRegion(getCountry.countries)
			} 
		});
	}

	selectors() {
		this.getCountriesData$ = this.fromCountryStore.select(fromCountryStore.countrySelector);
		this.isGetCountriesTransacting$ = this.fromCountryStore.select(fromCountryStore.isGetCountriesTransacting);
		this.isGetCountriesError$ = this.fromCountryStore.select(fromCountryStore.isGetCountriesError);
		this.isGetCountriesSuccess$ = this.fromCountryStore.select(fromCountryStore.isGetCountriesSuccess);
	}

	handleOnClickEvent(data: any) {
		localStorage.setItem('alpha3Code', data.alpha3Code);
		this.observableData.getDetailedCountryData(data);
		this.route.navigate(['/detailed-country'])
	}
}
