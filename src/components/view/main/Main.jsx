import React, { useContext } from 'react'
import { dataContext } from '../../context/FetchContext'
import ordenarData from '../../helpers/ordenarData'
import CardPrincipal from '../cardPrincipal/CardPrincipal'
import mainModule from "./main.module.css"

const Main = () => {
    let {
        datas,
        category
    } = useContext(dataContext);
    ordenarData(datas, category)
  return (
    <main className={mainModule.main}>
        {
            datas.productRequests.map(el => 
                <CardPrincipal key={el.id} data={el}/>
            )
        }
    </main>
  )
}

export default Main