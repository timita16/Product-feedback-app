import React from 'react';
import useMenuMobile from '../../hooks/useMenuMobile';
import replyingToModule from "./replying.module.css";

const ReplyingTo = ({el}) => {
    let {
        handleClick,
    } = useMenuMobile();
  return (
    <>
    <section className={replyingToModule.section}>
            <div className={replyingToModule.primerDiv}>
                <img src={require(`../../../assets/user-images${el.user.image}`)} alt="foto de la persona" className={replyingToModule.image} />
                <div>
                    <p className={replyingToModule.name}>{el.user.name}</p>
                    <p className={replyingToModule.username}>@{el.user.username}</p>
                </div>
                <p className={replyingToModule.reply} onClick={handleClick}>Reply</p>
            </div>
            <div>
                <p className={replyingToModule.contenido}>
                    <span className={replyingToModule.replyingTo}>@{el.replyingTo}</span> {el.content}
                </p>
            </div>
        </section>
        {/*
            menu && <Rta idEl={el.id}/>*/
        }
        {
           /* el.replies && el.replies.map((el,indexado) => 
                <ReplyingTo key={indexado} el={el} replyingTo={el.replyingTo} />
            ) */
        }
        {
            //cantComent-index > 1 && <span className={comentModule.linea}></span>
        }    
    </>
  )
}

export default ReplyingTo