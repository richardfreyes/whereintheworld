import { Action } from '@ngrx/store';

export enum CountriesActionTypes {
	GetCountries = '[Countries] Get Countries',
	GetCountriesSuccess = '[Countries] Get Countries Success',
	GetCountriesError = '[Countries] Get Countries Error',

	GetDetailedCountry = '[DetailedCountry] Get Detailed Country',
	GetDetailedCountrySuccess = '[DetailedCountry] Get Detailed Country Success',
	GetDetailedCountryError = '[DetailedCountry] Get Detailed Country Error'
}

export class GetCountries implements Action {
	readonly type = CountriesActionTypes.GetCountries;
	constructor(public payload: any) { }
};

export class GetCountriesSuccess implements Action {
	readonly type = CountriesActionTypes.GetCountriesSuccess;
	constructor(public payload: any) { }
};

export class GetCountriesError implements Action {
	readonly type = CountriesActionTypes.GetCountriesError;
	constructor(public payload: any) { }
};

export class GetDetailedCountry implements Action {
	readonly type = CountriesActionTypes.GetDetailedCountry;
	constructor(public payload: any) { }
};

export class GetDetailedCountrySuccess implements Action {
	readonly type = CountriesActionTypes.GetDetailedCountrySuccess;
	constructor(public payload: any) { }
};

export class GetDetailedCountryError implements Action {
	readonly type = CountriesActionTypes.GetDetailedCountryError;
	constructor(public payload: any) { }
};

export type AllCountriesActionType =
	| GetCountries
	| GetCountriesSuccess
	| GetCountriesError
	
	| GetDetailedCountry
	| GetDetailedCountrySuccess
	| GetDetailedCountryError;