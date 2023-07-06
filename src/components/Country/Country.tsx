import { ICountry } from "../../types/ICountry";

type CountryProps = {
    item: ICountry;
};

const Country = ({ item }: CountryProps) => {
    return (
        <div>
            <div>Name: {item.name.common}</div>
            <div>Population: {item.population}</div>
        </div>
    );
};

export default Country;
