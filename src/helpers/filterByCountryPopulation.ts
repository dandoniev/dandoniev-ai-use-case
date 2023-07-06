import { ICountry } from "../interfaces/ICountry";
import { ONE_MILLION } from "../const";

export const filterByCountryPopulation = (countries: ICountry[], population: number) => {
    return countries.filter(country => country.population < population * ONE_MILLION);
}