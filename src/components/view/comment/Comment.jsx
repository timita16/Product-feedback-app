import React from 'react';
import useMenuMobile from '../../hooks/useMenuMobile';
import ReplyingTo from '../replyingTo/ReplyingTo';
import Rta from '../rta/Rta';
import comentModule from "./coment.module.css";

const Comment = ({comentario, index, cantComent}) => {
    let {
        handleClick,
        menu
    } = useMenuMobile()
  return (
    <>
        <section className={comentModule.section}>
            <div className={comentModule.primerDiv}>
                <img src={require(`../../../assets/user-images${comentario.user.image}`)} alt="foto de la persona" className={comentModule.image} />
                <div>
                    <p className={comentModule.name}>{comentario.user.name}</p>
                    <p className={comentModule.username}>@{comentario.user.username}</p>
                </div>
                <p className={comentModule.reply} onClick={handleClick}>Reply</p>
            </div>
            <div>
                <p className={comentModule.contenido}>
                    {comentario.content}
                </p>
            </div>
        </section>
        {
            menu && <Rta idEl={comentario.id}/>
        }
        {
            comentario.replies && comentario.replies.map((el,indexado) => 
                <ReplyingTo key={indexado} el={el} />
            ) 
        }
        {
            cantComent-index > 1 && <span className={comentModule.linea}></span>
        }
    </>
  )
}

export default Comment