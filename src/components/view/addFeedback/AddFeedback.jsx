import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import addFeedbackModule from "./add.module.css"

const AddFeedback = () => {
    const navigate = useNavigate();
  return (
    <section className={addFeedbackModule.section}>
        <div className={addFeedbackModule.divLink}>
            <button onClick={() => navigate(-1)} className={addFeedbackModule.back}>Go back</button>
            <Link to="" className={addFeedbackModule.editLink}>Edit feedback</Link>
        </div>
        <div>
          
        </div>
    </section>
  )
}

export default AddFeedback