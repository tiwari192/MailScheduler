import React, {useState} from 'react'
import Login from './Login'
import {NavLink} from 'react-router-dom'
import '../css/Form.css'


const Signup = () => {

    const [registerData, setRegisterData] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });

    let name,value;

    const handleChange = (e) =>{

        name = e.target.name;
        value = e.target.value;
        setRegisterData({ ...registerData, [name] : value });

    }

    //To Do: for sending data to node server
    const postData =  (e) =>{

        e.preventDefault();
        console.log(e.target.email);
        //const response = await fetch('')

    }

    return (
        
            <div className='form-container'>
            <div className='form-content-right'>
                <form method="" className='form'>
                    <h1>
                        Get started with us today! Create your account by filling out the
                        information below.
                    </h1>

                    <div className='form-inputs'>
                        <label className='form-label'>Username</label>
                        <input
                            className='form-input'
                            type='text'
                            name='username'
                            placeholder='Enter your username'
                            value={registerData.username}
                            onChange={handleChange}
                        />
                        
                    </div>

                    <div className='form-inputs'>
                        <label className='form-label'>Email</label>
                        <input
                            className='form-input'
                            type='email'
                            name='email'
                            placeholder='Enter your email'
                            value={registerData.email}
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
                            value={registerData.password}
                            onChange={handleChange}
                        />
                        
                    </div>

                    <div className='form-inputs'>
                        <label className='form-label'>Confirm Password</label>
                        <input
                            className='form-input'
                            type='password'
                            name='password2'
                            placeholder='Confirm your password'
                            value={registerData.password2}
                            onChange={handleChange}
                        />
                        
                    </div>

                    <button className='form-input-btn' type='submit' onSubmit={postData}>
                        Sign up
                    </button>
                    <span className='form-input-login'>
                        Already have an account? Login <NavLink to='/login'>here</NavLink>
                    </span>
                </form>
            </div>
        </div>
        
    )
}

export default Signup
