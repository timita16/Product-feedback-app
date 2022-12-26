import React from 'react'
import image from "../../../assets/shared/mobile/icon-hamburger.svg";
import useMenuMobile from '../../hooks/useMenuMobile';
import Menu from '../menu/Menu';
import headerModule from "./Header.module.css"

const Header = () => {
  let {
    menu, 
    handleClick
  } = useMenuMobile();
  return (
    <>
      <section className={headerModule.sectionModule}>
          <div>
              <p className={headerModule.title}>Frontend mentor</p>
              <p className={headerModule.subTitle}>Feedback Board</p> 
          </div>
          <img src={image} alt="Hamburger's icon" onClick={handleClick} />
      </section>
      {
        menu && <Menu />
      }
    </>
  )
}

export default Header