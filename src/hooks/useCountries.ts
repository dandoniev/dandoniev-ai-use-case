import { useEffect, useState } from "react";
import axios from "axios";
import { ICountry } from "../types/ICountry";

export const useCountries = () => {
    const [countries, setCountries] = useState<ICountry[]>([]);

    useEffect(() => {
        (async () => {
            const countries = (await axios.get<ICountry[]>("https://restcountries.com/v3.1/all")).data
            
            setCountries(countries)
        })();
    }, [])


    return countries
}