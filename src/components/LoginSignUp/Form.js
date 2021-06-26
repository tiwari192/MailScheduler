import React, {useState} from 'react'
import FormSignup from './FormSignup';
import Home from '../Home';
import './Form.css'
import Logo from '../../images/mailLogo.png';
const Form = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);
    

    function submitForm(props) {
        setIsSubmitted(true);
    }

    return (
        <>  

            <div className="container">
                {!isSubmitted ? (
                    
                    <FormSignup submitForm={submitForm} />
                    
                ) : (
                    <Home />
                )}
            </div>
        </>
    )
}

export default Form
