import { ICountry } from "../../types/ICountry";
import { filterByCountryPopulation } from "../filterByCountryPopulation";

const countries: ICountry[] = [
    {
        name: {
            common: "India"
        },
        population: 20_000_000,
    },
    {
        name: {
            common: "China"
        },
        population: 200_000_000,
    },
    {
        name: {
            common: "Poland"
        },
        population: 5_000_000,
    },
]
describe("filterByCountryPopulation", () => {
    it("returns empty array if there's no countries", () => {
        expect(filterByCountryPopulation([], 20)).toStrictEqual([]);
    });

    it("returns matches if there's some countries with smaller population", () => {
        expect(filterByCountryPopulation(countries, 30)).toStrictEqual([{
            name: {
                common: "India"
            },
            population: 20_000_000,
        },
        {
            name: {
                common: "Poland"
            },
            population: 5_000_000,
        }]);
    });
});