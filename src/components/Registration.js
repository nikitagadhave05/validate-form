import React from 'react'
import { Formik, Form } from 'formik';
import Textfield from './Textfield';
import * as Yup from 'yup';
import 'yup-phone';


const Registration = () => {
    const validate = Yup.object({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .required('Confirm password required'),
        fullName: Yup.string()
            .max(30, 'Must be 30 character less')
            .required(' Name Required'),
        phoneNumber: Yup.string()
            .phone(null, true, "Invalid Phone Number")
            .required('Invalid Phone no')
    })

    const clickFunction=()=>{
       
    }
  
    return (

        <div className="right">
        
            <Formik className="form"
                initialValues={{
                    email: '',
                    password: '',
                    confirmPassword: '',
                    fullName: '',
                    phoneNumber: '',
                }}
                validationSchema={validate}
            >
                {formik => (
                    <div>
                        <h2 className='create-account'>Create an account</h2>
                        {console.log(formik.values)}
                        <Form className='form-page'>
                            <Textfield label="Your email address" name="email" type="text" />
                            <Textfield label="Your password" name="password" type="password" />
                            <Textfield label="Confirm your password" name="confirmPassword" type="password" />
                            <Textfield label="Your full Name" name="fullName" type="text" />
                            <Textfield label="Your phone Number" name="phoneNumber" type="number" />

                            <div className="checkbox">
                                <input type="checkbox" className="check" /> <b> I read and agree Terms and Conditions</b>
                            </div>

                            <button type='button' onClick={clickFunction}  className='btn createacc-btn'>Create account </button>

                        </Form>
                       
                    </div>
                )
                }
            </Formik>
        </div>

    )
}

export default Registration