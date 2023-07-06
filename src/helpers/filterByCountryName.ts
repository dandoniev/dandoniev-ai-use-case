import { ICountry } from "../interfaces/ICountry";

export const filterByCountryName = (countries: ICountry[], filteredCountryName: string) =>
    countries.filter(({ name: { common: countryName } }) => countryName.toLowerCase().includes(filteredCountryName.toLowerCase()));
