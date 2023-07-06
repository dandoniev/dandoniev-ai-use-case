import { ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler, useState } from "react";
import { IForm } from "../../types/IForm";
import "./Form.css";

const initialFormState: IForm = {
    name: "",
    pageSize: "",
    population: "",
    sortOrder: ""
};

type FormProps = {
    onSubmit: (params: IForm) => void;
};

const Form = ({ onSubmit }: FormProps) => {
    const [formState, setFormState] = useState<IForm>(initialFormState);

    const handleSubmit: FormEventHandler = (e: FormEvent) => {
        e.preventDefault();
        onSubmit(formState);
    };

    const handleChange: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setFormState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="name">
                Name
                <input id="name" type="text" name="name" onChange={handleChange} />
            </label>
            <label htmlFor="population">
                Population
                <input id="population" type="number" name="population" onChange={handleChange} />
            </label>

            <label htmlFor="sortOrder">
                Sort Order
                <input id="sortOrder" type="text" name="sortOrder" onChange={handleChange} />
            </label>
            <label htmlFor="pageSize">
                Page Size
                <input id="pageSize" type="number" name="pageSize" onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
