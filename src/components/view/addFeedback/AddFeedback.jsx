import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { formContext } from '../../context/FormContext';
import addFeedbackModule from "./add.module.css"

const AddFeedback = () => {
    const navigate = useNavigate();
    let {
      handleChange,
      form,
      handleSubmit,
      error
    } = useContext(formContext);

  return (
    <section className={addFeedbackModule.section}>
        <div className={addFeedbackModule.divLink}>
          <button onClick={() => navigate(-1)} className={addFeedbackModule.back}>Go back</button>
        </div>
        <span className={addFeedbackModule.span}></span>
        <div className={addFeedbackModule.divForm}>
          <p className={addFeedbackModule.titleForm}>Create New Feedback</p>
          <form className={addFeedbackModule.form} onSubmit={handleSubmit}>
            <div className={addFeedbackModule.divInput}>
              <p className={addFeedbackModule.titleInput}>Feedback Title</p>
              <p className={addFeedbackModule.subTitleInput}>Add a short, descriptive headline</p>
              <textarea className={`${addFeedbackModule.textarea} ${error.title && addFeedbackModule.inputError}`} name="title" onChange={handleChange} value={form.title}></textarea>
              {error.title && <p className={addFeedbackModule.errorMsg}>{error.title}</p>}
            </div>
            <div className={addFeedbackModule.divInput}>
              <p className={addFeedbackModule.titleInput}>Category</p>
              <p className={addFeedbackModule.subTitleInput}>Choose a category for your feedback</p>
              <select className={addFeedbackModule.select} name="category" onChange={handleChange} value={form.category}>
                <option className={addFeedbackModule.option} value="Feature">Feature</option>
                <option className={addFeedbackModule.option} value="UI">UI</option>
                <option className={addFeedbackModule.option} value="UX">UX</option>
                <option className={addFeedbackModule.option} value="Enhancement">Enhancement</option>
                <option className={addFeedbackModule.option} value="Bug">Bug</option>
              </select>
            </div>
            <div className={addFeedbackModule.divInput}>
              <p className={addFeedbackModule.titleInput}>Feedback Detail</p>
              <p className={addFeedbackModule.subTitleInput}>Include any specific comments on what should be improved, added, etc.</p>
              <textarea className={`${addFeedbackModule.textarea} ${error.description && addFeedbackModule.inputError}`} name="description" onChange={handleChange} value={form.description}></textarea>
              {error.description && <p className={addFeedbackModule.errorMsg}>{error.description}</p>}
            </div>
            <button type="submit" className={addFeedbackModule.buttonAdd}>Add feedback</button>
            <NavLink className={addFeedbackModule.navLinkCancelar}>Cancel</NavLink>
          </form>
        </div>
    </section>
  )
}

export default AddFeedback