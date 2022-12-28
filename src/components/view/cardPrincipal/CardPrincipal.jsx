import React from 'react'
import cardModule from "./card.module.css"
import image from "../../../assets/shared/icon-arrow-up.svg"
import imageComent from "../../../assets/shared/icon-comments.svg"
import {  NavLink } from 'react-router-dom'

const CardPrincipal = ({data}) => {
    let {
        title,
        description,
        category,
        upvotes,
        comments
    } = data
    return (
        <NavLink to={`/blog/${title}`} className={cardModule.navLink}>
            <div className={cardModule.div}>
                <div className={cardModule.primerDiv}>
                    <p className={cardModule.title}>{title}</p>
                    <p className={cardModule.description}>{description}</p>
                    <p className={cardModule.category}>{category}</p>
                </div>
                <div className={cardModule.divFlecha}>
                    <img src={image} alt="icono de la flecha"/>
                    <p className={cardModule.upvotes}>{upvotes}</p>
                </div>
                <div className={cardModule.divComent}>
                    <img src={imageComent} alt="icono de comentarios"/>
                    <p className={cardModule.upvotes}>
                    {
                        !comments
                        ? 0
                        : comments.length
                    }
                    </p>
                </div>
            </div>
        </NavLink>
  )
}

export default CardPrincipal