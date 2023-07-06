import { useCountryFilters } from "../../hooks/useCountryFilters";
import Form from "../Form/Form";
import Country from "../Country/Country";
import "./container.css";
const Container = () => {
    const [filteredCountries, applyFiltersAndSort] = useCountryFilters();

    return (
        <main>
            <Form onSubmit={applyFiltersAndSort} />

            <div className="countries-container">
                {filteredCountries.map((item) => (
                    <Country item={item} key={item.name.common} />
                ))}
            </div>
        </main>
    );
};

export default Container;
