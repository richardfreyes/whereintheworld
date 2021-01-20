import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromCountriesStore from '@rcc/shared/store/countries/index';

export const CountrytSelectorStoreState = createFeatureSelector<fromCountriesStore.CountriesModuleReducer>('country');

export const countrySelector = createSelector(
	CountrytSelectorStoreState,
	(state: fromCountriesStore.CountriesModuleReducer) => state.countries
);

export const isGetCountriesTransacting = createSelector(
	countrySelector,
	(state: fromCountriesStore.ICountries) => state.isGettingCountries
);

export const isGetCountriesSuccess = createSelector(
	countrySelector,
	(state: fromCountriesStore.ICountries) => state.isGettingCountriesSuccess
);

export const isGetCountriesError = createSelector(
	countrySelector,
	(state: fromCountriesStore.ICountries) => state.isGettingCountriesError
);

export const isGetDetailedCountryTransacting = createSelector(
	countrySelector,
	(state: fromCountriesStore.ICountries) => state.isGettingDetailedCountry
);

export const isGetDetailedCountrySuccess = createSelector(
	countrySelector,
	(state: fromCountriesStore.ICountries) => state.isGettingDetailedCountrySuccess
);

export const isGetDetailedCountryError = createSelector(
	countrySelector,
	(state: fromCountriesStore.ICountries) => state.isGettingDetailedCountryError
);