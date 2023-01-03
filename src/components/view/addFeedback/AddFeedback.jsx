import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import addFeedbackModule from "./add.module.css"

const AddFeedback = () => {
    const navigate = useNavigate();
  return (
    <section className={addFeedbackModule.section}>
        <div className={addFeedbackModule.divLink}>
          <button onClick={() => navigate(-1)} className={addFeedbackModule.back}>Go back</button>
        </div>
        <span className={addFeedbackModule.span}></span>
        <div className={addFeedbackModule.divForm}>
          <p className={addFeedbackModule.titleForm}>Create New Feedback</p>
          <form className={addFeedbackModule.form}>
            <div className={addFeedbackModule.divInput}>
              <p className={addFeedbackModule.titleInput}>Feedback Title</p>
              <p className={addFeedbackModule.subTitleInput}>Add a short, descriptive headline</p>
              <textarea className={addFeedbackModule.textarea}></textarea>
            </div>
            <div className={addFeedbackModule.divInput}>
              <p className={addFeedbackModule.titleInput}>Category</p>
              <p className={addFeedbackModule.subTitleInput}>Choose a category for your feedback</p>
              <select className={addFeedbackModule.select}>
                <option className={addFeedbackModule.option}>Feature</option>
                <option className={addFeedbackModule.option}>UI</option>
                <option className={addFeedbackModule.option}>UX</option>
                <option className={addFeedbackModule.option}>Enhancement</option>
                <option className={addFeedbackModule.option}>Bug</option>
              </select>
            </div>
            <div className={addFeedbackModule.divInput}>
              <p className={addFeedbackModule.titleInput}>Feedback Detail</p>
              <p className={addFeedbackModule.subTitleInput}>Include any specific comments on what should be improved, added, etc.</p>
              <textarea className={addFeedbackModule.textarea}></textarea>
            </div>
            <button type="submit" className={addFeedbackModule.buttonAdd}>Add feedback</button>
            <NavLink className={addFeedbackModule.navLinkCancelar}>Cancel</NavLink>
          </form>
        </div>
    </section>
  )
}

export default AddFeedback