import { ICountry } from "../../types/ICountry";
import { sortByCountryName } from "../sortByCountryName"

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

describe("sortByCountryName", () => {
    it("returns empty array if there's no countries", () => {
        expect(sortByCountryName([], "ascend")).toStrictEqual([]);
    });

    it("returns sorted array in ascend order", () => {
        expect(sortByCountryName(countries, "ascend")).toStrictEqual([
            {
                name: {
                    common: "China"
                },
                population: 200_000_000,
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
            {
                name: {
                    common: "India"
                },
                population: 20_000_000,
            },
            {
                name: {
                    common: "Latvia"
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
                    common: "Poland"
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
                    common: "Slovenia"
                },
                population: 5_000_000,
            },
            {
                name: {
                    common: "Ukraine"
                },
                population: 5_000_000,
            }
        ]);

        
    });

    it("returns sorted array in descend order", () => {
        expect(sortByCountryName(countries, "descend")).toStrictEqual([
            {
                name: {
                    common: "Ukraine"
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
                    common: "Poland"
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
                    common: "Latvia"
                },
                population: 5_000_000,
            },
            {
                name: {
                    common: "India"
                },
                population: 20_000_000,
            },
            {
                name: {
                    common: "Germany"
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
                    common: "China"
                },
                population: 200_000_000,
            },
        ]);
    });
});