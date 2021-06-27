import React, { useState } from 'react'
import '../css/Form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
const CreatePage = () => {

    const [mailType, setMailType] = useState('');
    const handleSelect=(e)=>{
         console.log(e);
        setMailType(e);
      }

    const [mailData, setMailData] = useState({

        toEmail: '',
        CCEmail: '',
        subject: '',
        mailBody: ''

    });


    let name, value;
    const handleChange = (e) => {

        name = e.target.name;
        value = e.target.value;
        setMailData({ ...mailData, [name]: value });

    }

    const postMails = (e) => {
        e.preventDefault();
    }


    return (
        <div className='main-page'>
            <div className='form-container'>
                <div className='form-content-right'>

                    <form mathod="POST" className='form'>

                        <h1 className="text-center">
                            Compose Mail
                        </h1>


                        <div className='form-inputs'>
                            <label className='form-label'>To</label>
                            <input
                                className='form-input'
                                type='email'
                                name='toEmail'
                                placeholder='Email Address'
                                value={mailData.toEmail}
                                onChange={handleChange}

                            />

                        </div>

                        <div className='form-inputs'>
                            <label className='form-label'>CC</label>
                            <input
                                className='form-input'
                                type='email'
                                name='CCEmail'
                                placeholder='Enter Multiple Email Addresses in CC'
                                multiple
                                value={mailData.CCEmail}
                                onChange={handleChange}
                            />


                        </div>
                        <div className='form-inputs'>
                            <label className='form-label'>Subject</label>
                            <input
                                className='form-input'
                                type='text'
                                name='subject'
                                placeholder='Enter Subject of Email'
                                value={mailData.subject}
                                onChange={handleChange}
                            />



                        </div>

                        <div className='form-inputs'>
                            <label className='form-label'></label>
                            <DropdownButton
                                alignRight
                                title="Select your Schedule"
                                id="dropdown-menu-align-right"
                                
                                onSelect={handleSelect}
                            >
                                <Dropdown.Item eventKey="Recurring">Recurring Schedule (1 minute)</Dropdown.Item>
                                <Dropdown.Item eventKey="Weekly">Weekly schedule</Dropdown.Item>
                                <Dropdown.Item eventKey="Monthly">Monthly schedule</Dropdown.Item>
                                <Dropdown.Item eventKey="Yearly">Yearly schedule</Dropdown.Item>
                            </DropdownButton>
                        </div>

                        <div className='form-inputs'>
                            <label className='form-label'>Mail Body (Enter Text)</label>
                            <textarea
                                rows="2"
                                cols="52"
                                name="mailBody"
                                value={mailData.mailBody}
                                onChange={handleChange}>

                            </textarea>

                        </div>

                        <button className='form-input-btn' type='submit' onSubmit={postMails} >
                            Send Mail
                        </button>
                    </form>
                </div>
            </div>
        </div>





    )
}

export default CreatePage
