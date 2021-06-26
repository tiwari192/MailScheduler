import React,{useState} from 'react'

const Login = () => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    let name,value;

    const handleChange = (e) =>{
        name = e.target.name;
        value = e.target.value;
        setLoginData({ ...loginData, [name] : value });
    }

    //To Do: for sending data to node server
    const loginUser = (e) => {

        e.preventDefault();


    }

    return (
        <div className='form-container'>
            <div className='form-content-right'>
                <form className='form'>
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
                            value={loginData.email}
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
                            value={loginData.password}
                            onChange={handleChange}
                        />
                        
                    </div>


                    <button className='form-input-btn' type='submit' onSubmit={loginUser}>
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

export default Login
