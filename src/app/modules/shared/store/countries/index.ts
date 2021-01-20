import { ActionReducerMap } from '@ngrx/store';
import { CountriesReducer } from '@rcc/shared/store/countries/reducers/countries.reducer';
import { ICountries } from '@rcc/shared/store/countries/models/countries.model'
export * from '@rcc/shared/store/countries/actions/countries.action';
export * from '@rcc/shared/store/countries/models/countries.model';
export * from '@rcc/shared/store/countries/reducers/countries.reducer';
export * from '@rcc/shared/store/countries/selectors/countries.selector';

export interface CountriesModuleReducer {
	countries: ICountries
};

export const SharedModuleActionReducers: ActionReducerMap<CountriesModuleReducer> = {
	countries: CountriesReducer
}