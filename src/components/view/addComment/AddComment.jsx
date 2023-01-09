import React from 'react';
import useFormPostComment from '../../hooks/useFormPostComment';
import addModule from "./add.module.css";

const AddComment = ({id}) => {
    let {
        handleChange,
        handleSubmit,
        comment
    } = useFormPostComment(id);
  return (
    <form className={addModule.formulario} onSubmit={handleSubmit}>
        <p className={addModule.h1}>Add comment</p>
        <textarea 
            placeholder='Type your comment here'
            onChange={handleChange}
            value={comment.content}
            name="content"
            className={addModule.textarea}
        />  
        <div className={addModule.divButon}>
            <p className={addModule.caracter}>{250-comment.content.length} Characters left</p>
            <button className={addModule.buttonAdd}>Post comment</button>
        </div>
    </form>
  )
}

export default AddComment