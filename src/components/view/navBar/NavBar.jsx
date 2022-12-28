import React, { useContext } from 'react'
import image from "../../../assets/suggestions/icon-suggestions.svg";
import { dataContext } from '../../context/FetchContext';
import useMenuMobile from '../../hooks/useMenuMobile';
import navBarModule from "./navBar.module.css";

const NavBar = () => {
    let {
        menu,
        handleClick
    } = useMenuMobile()
    let {
        category,
        handleClickCategory,
    } = useContext(dataContext);
  return (
    <nav className={navBarModule.nav}>
        <div className={navBarModule.divSuggestions}>
            <img src={image} alt="icono de algo" />
            <p>{} Suggestions</p>
        </div>
        <div className={navBarModule.form}>
            <div className={navBarModule.divForm}>
                <p className={navBarModule.sort}>Sort by: </p>
                <p className={navBarModule.select} onClick={handleClick}>{category}</p>
                {   
                    menu  &&
                    <div className={navBarModule.divSelect}>
                        <p className={navBarModule.option} onClick={handleClickCategory} id="Most Upvotes">Most Upvotes</p>
                        <p className={navBarModule.option} onClick={handleClickCategory} id="Least Upvotes">Least Upvotes</p>
                        <p className={navBarModule.option} onClick={handleClickCategory} id="Most Comments">Most Comments</p>
                        <p className={navBarModule.option} onClick={handleClickCategory} id="Least Comments">Least Comments</p>
                    </div>
                }
            </div>
            <a href="#" className={navBarModule.buton}>+ Add Feedback</a>
        </div>
    </nav>
  )
}

export default NavBar