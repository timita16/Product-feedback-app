import React, { createContext, useEffect, useState } from 'react'
import datas from "../../data.json";


const dataContext = createContext(null);

const FetchContext = ({children}) => {
    const [category, setCategory] = useState("Most Upvotes");
    const [data, setData] = useState(datas)
    
    const updateData = () => {
        if(!localStorage.getItem("data")) {
            localStorage.setItem("data", JSON.stringify(datas))
            setData(JSON.parse(localStorage.getItem("data"))) 
        } else {
            setData(JSON.parse(localStorage.getItem("data")))
        }
    }
    
    useEffect(() => {
      updateData();
    }, [setData])
    

    const handleClickCategory = (e) => setCategory(e.target.id);

    const values = {
        category,
        handleClickCategory,
        updateData,
        data
    }

  return <dataContext.Provider value={values}>{children}</dataContext.Provider>
}

export {dataContext}
export default FetchContext