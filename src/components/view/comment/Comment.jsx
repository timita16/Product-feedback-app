import React from 'react';
import comentModule from "./coment.module.css";

const Comment = ({comentario, index, cantComent}) => {
    console.log(cantComent)
  return (
    <>
        <section className={comentModule.section}>
            <div className={comentModule.primerDiv}>
                <img src={require(`../../../assets/user-images${comentario.user.image}`)} alt="foto de la persona" className={comentModule.image} />
                <div>
                    <p className={comentModule.name}>{comentario.user.name}</p>
                    <p className={comentModule.username}>@{comentario.user.username}</p>
                </div>
                <p className={comentModule.reply}>Reply</p>
            </div>
            <div>
                <p className={comentModule.contenido}>{comentario.content}</p>
            </div>
        </section>
        {
            cantComent-index !== 1 && <span className={comentModule.linea}></span>
        }
       
    </>
  )
}

export default Comment