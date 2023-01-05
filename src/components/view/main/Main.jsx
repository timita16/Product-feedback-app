import React, { useContext } from 'react'
import { dataContext } from '../../context/FetchContext'
import ordenarData from '../../helpers/ordenarData'
import CardPrincipal from '../cardPrincipal/CardPrincipal'
import mainModule from "./main.module.css"

const Main = () => {
    let {
        data,
        category
    } = useContext(dataContext);
    ordenarData(data, category)
  return (
    <main className={mainModule.main}>
        {
            data.productRequests.map(el => 
                <CardPrincipal key={el.id} data={el}/>
            )
        }
    </main>
  )
}

export default Main