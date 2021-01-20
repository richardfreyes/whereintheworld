export interface ICountries extends ICountriesState {
	isGettingCountries: boolean;
	isGettingCountriesSuccess: boolean;
	isGettingCountriesError: boolean;

	isGettingDetailedCountry: boolean;
	isGettingDetailedCountrySuccess: boolean;
	isGettingDetailedCountryError: boolean;
};

export interface ICountriesState {
	countries: Array<any>;
	detailedCountry: any;
};