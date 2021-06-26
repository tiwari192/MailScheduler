import React from 'react'

const CreatePage = () => {
    return (
        <div className='main-page'>
            <div className='form-container'>
            <h1 className='text-center text-black mt-3'>Create Mail</h1>
            
                <form className='form'>

                    <div className='form-inputs'>
                        <label className='form-label'>To</label>
                        <input
                            className='form-input'
                            type='email'
                            name='email'
                            placeholder='Email Address'
                            
                        />
                        
                    </div>

                    <div className='form-inputs'>
                        <label className='form-label'>CC</label>
                        <input
                            className='form-input'
                            type='email'
                            name='email'
                            placeholder='Enter Multiple Email Addresses in CC'
                            
                        />
                        
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Subject</label>
                        <input
                            className='form-input'
                            type='text'
                            name='text'
                            placeholder='Enter Subject of Email'
                            
                        />
                        
                    </div>

                    <div className='form-inputs'>
                        <label className='form-label'>Select Schedule Type</label>
                    <select className='form-inputs'>  
                        <option value = "Recurring">Recurring Schedule (30 Seconds)</option>  
                        <option value = "Weekly">Weekly schedule</option>  
                        <option value = "Monthly">Monthly schedule</option>  
                        <option value = "Yearly"> Yearly schedule</option>  
                    </select>  
                        
                    </div>

                    <div className='form-inputs'>
                    <label className='form-label'>Mail Body (Enter Text)</label>
                        <textarea rows="2" cols="52" name="MailBody"></textarea>
                    </div>

                    <button className='form-input-btn' type='submit' >
                        Send Mail
                    </button>
                </form>
                </div>
                </div>
                
                
            
            
    
    )
}

export default CreatePage
