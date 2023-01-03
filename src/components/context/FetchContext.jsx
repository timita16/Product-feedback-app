import React, { createContext, useState } from 'react'
import datas from "../../data.json";


const dataContext = createContext(null);
let data = {};
if(!localStorage.getItem("data")) {
    localStorage.setItem("data", JSON.stringify(datas))
    data = JSON.parse(localStorage.getItem("data")) 
} else {
    data = JSON.parse(localStorage.getItem("data"))
}

const FetchContext = ({children}) => {
    const [category, setCategory] = useState("Most Upvotes");
    const handleClickCategory = (e) => setCategory(e.target.id);



    const values = {
        category,
        handleClickCategory,
        datas
    }

  return <dataContext.Provider value={values}>{children}</dataContext.Provider>
}

export {dataContext}
export default FetchContext