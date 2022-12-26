import React from 'react'
import FormCategory from '../formCategory/FormCategory'
import menuModule from "./menu.module.css"

const Menu = () => {
  return (
    <div className={menuModule.div}>
        <section className={menuModule.section}>
            <FormCategory />
            <div className={menuModule.divPrincipal}>
                <div className={menuModule.primerDiv}>
                    <p className={menuModule.roadmap}>Roadmap</p>
                    <a href='#'>view</a>
                </div>
                <div className={menuModule.segundoDiv}>
                    <div className={menuModule.divParrafo}>
                        <p className={menuModule.parrafo}>Planned</p>
                        <span className={menuModule.span}>4{}</span>
                    </div>
                    <div className={menuModule.divParrafo}>
                        <p className={menuModule.parrafo}>In-Progress</p>
                        <span className={menuModule.span}>4{}</span>
                    </div>
                    <div className={menuModule.divParrafo}>
                        <p className={menuModule.parrafo}>Live</p>
                        <span className={menuModule.span}>4{}</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Menu