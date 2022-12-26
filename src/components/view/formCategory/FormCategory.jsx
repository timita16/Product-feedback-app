import React from 'react';
import formModule from "./formCategory.module.css";

const FormCategory = () => {
  return (
    <form className={formModule.formulario}>
        <div className={formModule.div}>
            <input type="radio" name="category" id="all" className={formModule.input} defaultChecked/>
            <label htmlFor='all' className={formModule.label}>All</label>
        </div>
        <div className={formModule.div}>
            <input type="radio" name="category" id="ui" className={formModule.input} />
            <label htmlFor='ui' className={formModule.label}>UI</label>
        </div>
        <div className={formModule.div}>
            <input type="radio" name="category" id="ux" className={formModule.input} />
            <label htmlFor='ux' className={formModule.label}>UX</label>
        </div>
        <div className={formModule.div}>
            <input type="radio" name="category" id="enhancement" className={formModule.input} />
            <label htmlFor='enhancement' className={formModule.label}>Enhancement</label>
        </div>
        <div className={formModule.div}>
            <input type="radio" name="category" id="bug" className={formModule.input} />
            <label htmlFor='bug' className={formModule.label}>Bug</label>
        </div>
        <div className={formModule.div}>
            <input type="radio" name="category" id="feature" className={formModule.input} />
            <label htmlFor='feature' className={formModule.label}>Feature</label>
        </div>
    </form>
  )
}

export default FormCategory