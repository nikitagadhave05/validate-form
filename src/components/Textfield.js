import React from 'react';
import { ErrorMessage, useField } from 'formik';

const Textfield = ({label, ...props}) => {
    const [field, meta]= useField(props);
    // console.log(field);
  return (
    <div>
        <label htmlFor={field.name} className='form-labels'>{label}</label>
        <div className="input">
        {/* <input className="form-control shadow-none mb-3" {...field} {...props} autoComplete='off' /> */}
        <input id='inputs' className= {`${meta.touched && meta.error && 'is-invalid'}`} {...field} {...props} />
        </div>
        <ErrorMessage component='div' name={field.name} className='error' />
    </div>
  )
}

export default Textfield