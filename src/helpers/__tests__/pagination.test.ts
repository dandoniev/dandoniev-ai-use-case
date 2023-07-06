import { ICountry } from "../../types/ICountry";
import { getSelectionOfNElements } from "../pagination";

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
    {
        name: {
            common: "Latvia"
        },
        population: 5_000_000,
    },
    {
        name: {
            common: "Slovenia"
        },
        population: 5_000_000,
    },
    {
        name: {
            common: "Slovakia"
        },
        population: 5_000_000,
    },
    {
        name: {
            common: "Makedonia"
        },
        population: 5_000_000,
    },
    {
        name: {
            common: "Ukraine"
        },
        population: 5_000_000,
    },
    {
        name: {
            common: "France"
        },
        population: 5_000_000,
    },
    {
        name: {
            common: "Germany"
        },
        population: 5_000_000,
    },
]
describe("getSelectionOfNElements", () => {
    it("returns empty array if there's no countries", () => {
        expect(getSelectionOfNElements([], 20)).toStrictEqual([]);
    });

    it("returns 5 elements from array of 10 elements", () => {
        expect(getSelectionOfNElements(countries, 5)).toStrictEqual([{
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
        {
            name: {
                common: "Latvia"
            },
            population: 5_000_000,
        },
        {
            name: {
                common: "Slovenia"
            },
            population: 5_000_000,
        }]);
    });
});