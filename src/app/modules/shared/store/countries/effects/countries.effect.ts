import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, take } from 'rxjs/operators';
import { CountriesService } from '@rcc/shared/services/countries.service';
import * as fromCountriesAction from '@rcc/shared/store/countries/actions/countries.action';

@Injectable()
export class CountriesEffects {
	constructor(
		private action$: Actions,
		private countryService: CountriesService
	) { }

	@Effect()
		getCountries$: Observable<Action> = this.action$.pipe(
		ofType<fromCountriesAction.GetCountries>(fromCountriesAction.CountriesActionTypes.GetCountries),
		map(action => action.payload),
		switchMap((payload: any) => {
			return this.countryService.apiGetCountries(payload).pipe(
				map((response: any) => {
					return new fromCountriesAction.GetCountriesSuccess(response);
				}), 
				catchError(error => {
					return of(new fromCountriesAction.GetCountriesError(error));
				})
			)
		})
	);

	@Effect()
	getDetailedCountry$: Observable<Action> = this.action$.pipe(
	ofType<fromCountriesAction.GetDetailedCountry>(fromCountriesAction.CountriesActionTypes.GetDetailedCountry),
	map(action => action.payload),
	switchMap((payload: any) => {
		return this.countryService.apiGetDetailedCountry(payload).pipe(
			map((response: any) => {
				return new fromCountriesAction.GetDetailedCountrySuccess(response);
			}), 
			catchError(error => {
				return of(new fromCountriesAction.GetDetailedCountryError(error));
			})
		)
	})
);
}