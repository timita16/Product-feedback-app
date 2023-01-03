import { createContext, useState } from "react";

const formContext = createContext(null);

const initialForm = {
    title:"",
    category:"Feature",
    comment:""
}

const ContextForm = ({children}) => {
    const [form, setForm] = useState(initialForm)


    let data = {

    }

    return <formContext.Provider value={data}>{children}</formContext.Provider>
}

export {formContext}
export default ContextForm