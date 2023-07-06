import { ICountry } from "../types/ICountry";
import { SortOrder } from "../types/common";

export const sortByCountryName = (countries: ICountry[], sortOrder: SortOrder) => {
    return [...countries].sort((a, b) => {
        const { name: { common: firstName } } = a
        const { name: { common: secondName } } = b
        
        if (sortOrder === "descend") {
            return firstName > secondName ? -1 : 1
        }

        return firstName > secondName ? 1 : -1
    });
}
