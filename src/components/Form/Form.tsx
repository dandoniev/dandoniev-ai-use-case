import { ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler, useState } from "react";
import { IForm } from "../../interfaces/IForm";
import "./Form.css";
import { useCountries } from "../../hooks/useCountries";

const initialFormState: IForm = {
    field1: "",
    field2: "",
    field3: "",
    field4: ""
};

const Form = () => {
    const _countries = useCountries();

    const [_formState, setFormState] = useState<IForm>(initialFormState);

    const onSubmit: FormEventHandler = (e: FormEvent) => {
        e.preventDefault();
    };

    const onChange: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setFormState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <form className="form" onSubmit={onSubmit}>
            <input type="text" onChange={onChange} />
            <input type="text" onChange={onChange} />
            <input type="text" onChange={onChange} />
            <input type="text" onChange={onChange} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
