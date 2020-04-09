import React from 'react';
import './get-in-touch.style.scss';

const GetInTouch = () => {
    return (
        <div className='get-in-touch '>
            <div className='form'>
                <h1 className='head wide'>PLAN A PROJECT</h1>
                <h3 className='sub-head wide'>HAVE A COFEE WITH US</h3>
                <p className='wide'>BUSINESS ENQUERIES</p>
                <div className='input-box'>
                    <input className='border0' type='text' name='Name' placeholder='Name'/>
                    <input className='border0' type='text' name='Phone' placeholder='Phone Number (If Any)'/>
                    <textarea className='border0 message-box' type='message' name='message' placeholder='Type your message here...' maxLength='250' />
                    <input className='border0 email' type='e-mail' name='e-mail' placeholder='you@example.com' />    
                    <button className='button' type='submit'>Submit</button>
                    <div></div>
                </div>
            </div>            
        </div>
    );
}

export default GetInTouch;