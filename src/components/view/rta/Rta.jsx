import React from 'react'
import { useParams } from 'react-router-dom';
import useFormPostComment from '../../hooks/useFormPostComment';
import rtaModule from "./rta.module.css";

const Rta = ({idEl}) => {
  const {id} = useParams();
    let {
        handleChange,
        handleSubmit,
        comment
    } = useFormPostComment(id,idEl);
  return (
    <form className={rtaModule.formulario} onSubmit={handleSubmit}>
        <textarea
            placeholder='Type your comment here'
            onChange={handleChange}
            value={comment.content}
            name="content"
            className={rtaModule.textarea}
        />
        <button className={rtaModule.buttonAdd} type="submit">Post Reply</button>
    </form>
  )
}

export default Rta