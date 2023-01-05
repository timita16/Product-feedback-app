import { createContext, useContext, useEffect, useState } from "react";
import errorForm from "../helpers/errorForm";
import { dataContext } from "./FetchContext";

const formContext = createContext(null);

const initialForm = {
    id: Date.now(),
    title: "",
    category: "feature",
    upvotes: 0,
    status: "suggestion",
    description: "",
    comments: []
}

const ContextForm = ({children}) => {
    const [form, setForm] = useState(initialForm);
    const [error, setError] = useState({});

    let {
        errores
    } = errorForm(form);

    let {
        updateData
    } = useContext(dataContext);

    useEffect(() => {
        setError({});
    }, []);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(Object.values(errores).length === 0) {
            //Agregando el comentario
            let newArray = JSON.parse(localStorage.getItem("data"))
            newArray.productRequests.push(form);
            localStorage.setItem("data", JSON.stringify(newArray));
            updateData();
            return setForm(initialForm)
        }
        setError(errores)
    }

    let data = {
        handleChange,
        form,
        error,
        handleSubmit
    }

    return <formContext.Provider value={data}>{children}</formContext.Provider>
}

export {formContext}
export default ContextForm