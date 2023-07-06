import { ICountry } from "../../types/ICountry";
import { filterByCountryName } from "../filterByCountryName"

const countries: ICountry[] = [
    {
        name: {
            common: "India"
        },
        population: 11,
    },
    {
        name: {
            common: "China"
        },
        population: 11,
    },
    {
        name: {
            common: "Poland"
        },
        population: 11,
    },
]
describe("filterByCountryName", () => {
    it("returns empty array if there's no countries", () => {
        expect(filterByCountryName([], "st")).toStrictEqual([]);
    });

    it("returns empty array if there's no such country", () => {
        expect(filterByCountryName(countries, "Malta")).toStrictEqual([]);
    });

    it("returns matches if there's some countries which name includes the substring", () => {
        expect(filterByCountryName(countries, "in")).toStrictEqual([{
            name: {
                common: "India"
            },
            population: 11,
        },
        {
            name: {
                common: "China"
            },
            population: 11,
        }]);
    });
});