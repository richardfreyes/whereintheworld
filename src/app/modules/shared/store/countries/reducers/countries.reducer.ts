import { ICountries } from '@rcc/shared/store/countries/models/countries.model';
import * as fromSharedCountriesAction from '@rcc/shared/store/countries/actions/countries.action';

export let initialState: ICountries = {
	countries: [],
	detailedCountry: [],

	isGettingCountries: false,
	isGettingCountriesSuccess: false,
	isGettingCountriesError: false,

	isGettingDetailedCountry: false,
	isGettingDetailedCountrySuccess: false,
	isGettingDetailedCountryError: false
}

export function CountriesReducer(
	state = initialState, 
	action: fromSharedCountriesAction.AllCountriesActionType
): ICountries {
	switch (action.type) {
		case fromSharedCountriesAction.CountriesActionTypes.GetCountries:
			return {
				...state,
				isGettingCountries: true,
				isGettingCountriesSuccess: false,
				isGettingCountriesError: false
			}
		case fromSharedCountriesAction.CountriesActionTypes.GetCountriesSuccess:
			return {
				...state,
				isGettingCountries: false,
				isGettingCountriesSuccess: true,
				isGettingCountriesError: false,
				countries: action.payload
			}

		case fromSharedCountriesAction.CountriesActionTypes.GetCountriesError:
			return {
				...state,
				isGettingCountries: false,
				isGettingCountriesSuccess: false,
				isGettingCountriesError: true
			}

		case fromSharedCountriesAction.CountriesActionTypes.GetDetailedCountry:
			return {
				...state,
				isGettingDetailedCountry: true,
				isGettingDetailedCountrySuccess: false,
				isGettingDetailedCountryError: false
			}

		case fromSharedCountriesAction.CountriesActionTypes.GetDetailedCountrySuccess:
			return {
				...state,
				isGettingDetailedCountry: false,
				isGettingDetailedCountrySuccess: true,
				isGettingDetailedCountryError: false,
				detailedCountry: action.payload
			}

		case fromSharedCountriesAction.CountriesActionTypes.GetDetailedCountryError:
			return {
				...state,
				isGettingDetailedCountry: false,
				isGettingDetailedCountrySuccess: false,
				isGettingDetailedCountryError: true
			}

		default:
			return state;
	}
}