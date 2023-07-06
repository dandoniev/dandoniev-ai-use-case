import { useCallback, useState } from "react";
import { ICountry } from "../types/ICountry"
import { useCountries } from "./useCountries"
import { IForm } from "../types/IForm";
import { filterByCountryName } from "../helpers/filterByCountryName";
import { filterByCountryPopulation } from "../helpers/filterByCountryPopulation";
import { sortByCountryName } from "../helpers/sortByCountryName";
import { getSelectionOfNElements } from "../helpers/pagination";
import { SortOrder } from "../types/common";

export type FiltersReturn = [ICountry[], (params: IForm) => void]

export const useCountryFilters = (): FiltersReturn => {
    const countries: ICountry[] = useCountries();
    const [filteredCountries, setFilteredCountries] = useState<ICountry[]>([]);
    console.log(filteredCountries);
    const applyFiltersAndSorts = useCallback(({ name, population, pageSize, sortOrder }: IForm) => {
        const filteredByName = filterByCountryName(countries, name);
        const filteredByPopulation = filterByCountryPopulation(filteredByName, +population);
        const sortedCountries = sortByCountryName(filteredByPopulation, sortOrder as SortOrder)


        setFilteredCountries(getSelectionOfNElements(sortedCountries, +pageSize))
    }, [countries]);


    return [filteredCountries, applyFiltersAndSorts];
}