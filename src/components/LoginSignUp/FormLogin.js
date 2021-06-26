import React from 'react'
import useFormSignup from './useFormSignup'
import validate from './validateInfo';

const FormLogin = ({ submitForm }) => {

    const { handleChange,values, handleSubmit, errors} = useFormSignup(submitForm,validate);


    return (
        <div className='form-container'>
            <div className='form-content-right'>
                <form onSubmit={handleSubmit} className='form'>
                    <h1>
                        Login In to resume your services
                    </h1>

                    <div className='form-inputs'>
                        <label className='form-label'>Email</label>
                        <input
                            className='form-input'
                            type='email'
                            name='email'
                            placeholder='Enter your email'
                            value={values.email}
                            onChange={handleChange}
                        />
                        
                    </div>

                    <div className='form-inputs'>
                        <label className='form-label'>Password</label>
                        <input
                            className='form-input'
                            type='password'
                            name='password'
                            placeholder='Enter your password'
                            value={values.password}
                            onChange={handleChange}
                        />
                        
                    </div>


                    <button className='form-input-btn' type='submit'>
                        Sign In
                    </button>
                    <span className='form-input-login'>
                        Forgot Password? Click?
                    </span>
                </form>
            </div>
        </div>
    )
}

export default FormLogin
