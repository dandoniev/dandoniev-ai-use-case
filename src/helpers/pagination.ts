import { ICountry } from "../types/ICountry"

export const getSelectionOfNElements = (countries: ICountry[], n: number) => {
    return countries.slice(0, n)
}